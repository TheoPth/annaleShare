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
import { Droit } from '../../../../monitoring/shared/models/droit.model';
import { getDroitsSpeSelectedSelector } from '../../../../search/shared/store/search.selectors';
import { FetchDroit } from '../../../../monitoring/shared/store/monitoring.actions';

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

  public droitUser : Droit[];

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

      // Get all links for ressources
      this.store.dispatch(new FetchRessourceFile(res.idRessource));
    });

    this.ressourceFile$.subscribe( val => {
      this.ressourceFile = val;
    });

    this.store.pipe(select(getDroitsSpeSelectedSelector)).subscribe( (droits : Droit[]) => {
      this.droitUser = droits;
    })

     // Récupération des droits du user sur cette spécialité
   this.store.dispatch(new FetchDroit());
 
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

   // Vérifie que l'utilisateur a bien les droits pour ajouter
 public possedeDroit(nomDroit : string) : boolean {
  let possedeDroit = false;
  if (this.droitUser) {
    this.droitUser.forEach((droit : Droit) => {
      if ( droit.intitule == nomDroit ) {
        possedeDroit = droit.estAcquis;
      }
  });
  }

  return possedeDroit;
}

  

}
