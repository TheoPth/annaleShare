import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../../../../shared/store';
import { ressourceSelectedSelector, ressourceFileSelector } from '../../store/ressource.selectors';
import { ressource } from '../../models/ressource.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MatiereService } from '../../services/matiere.service';
import { UploadFile, FetchRessourceFile, DeleteFile } from '../../store/ressource.actions';
import { RessourceFile } from '../../models/ressourceFile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aff-ressource',
  templateUrl: './aff-ressource.component.html',
  styleUrls: ['./aff-ressource.component.css']
})
export class AffRessourceComponent implements OnInit {
  public ressource$: Observable<ressource>;
  public ressource : ressource;
  public ressourceFile$: Observable<RessourceFile[]>;
  public ressourceFile : RessourceFile[];

  constructor(
    public store : Store<State>,
    public sanitizer: DomSanitizer,
    public matiereService : MatiereService,
    private router : Router
  ) {
    this.ressource$ = this.store.pipe(select(ressourceSelectedSelector));
    this.ressourceFile$ = this.store.pipe(select(ressourceFileSelector));
   }

  ngOnInit() {
    this.ressource$.subscribe(res => {
      this.ressource = res;

      // Get all link for ressources
      this.store.dispatch(new FetchRessourceFile(res.idRessource));
    });

    this.ressourceFile$.subscribe( val => {
      this.ressourceFile = val;
    });
  }


  public fileEvent($event) {
    let fileSelected: File = $event.target.files[0];
    this.store.dispatch(new UploadFile({file : fileSelected, idRessource : this.ressource.idRessource}));
    this.router.navigateByUrl('/matiere/ressources');
  }

  public getSafeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  public deleteFile(file : RessourceFile) {
    this.store.dispatch(new DeleteFile(file));
    this.router.navigateByUrl('/matiere/ressources');
  }

}
