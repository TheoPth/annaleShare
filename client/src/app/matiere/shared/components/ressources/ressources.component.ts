import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../../../shared/store';
import { Observable } from 'rxjs';
import { ressource } from '../../models/ressource.model';
import { ressourceSelector, ressourceTypeSelectedSelector } from '../../store/ressource.selectors';
import { FetchRessource, SetRessourceSelected, AjoutRessource } from '../../store/ressource.actions';
import { log } from 'util';
import { Router } from '@angular/router';
import { typeRessource } from '../../models/typeRessource.model';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})
export class RessourcesComponent implements OnInit {
  public ressources$: Observable<ressource[]>;
  public typeRessourceSelected$ : Observable<typeRessource>;
  public typeRessourceSelected : typeRessource;

  constructor(private store : Store<State>,
  public router : Router) {
    this.ressources$ = this.store.pipe(select(ressourceSelector));
    this.typeRessourceSelected$ = this.store.pipe(select(ressourceTypeSelectedSelector));
   }

  ngOnInit() {
    this.store.dispatch(new FetchRessource());
    this.typeRessourceSelected$.subscribe( (val : typeRessource) => {
      this.typeRessourceSelected = val;
    });
    
  }

  public pickRessource (choix : ressource) {
    this.store.dispatch(new SetRessourceSelected(choix));
    this.router.navigateByUrl('/matiere/affRessource');
  }

  public ajoutTypeRessource() {
    document.getElementById("openModalButton3").click();
  }

  public addRessource(nomRessource : string) {
    this.store.dispatch(new AjoutRessource(
      {idRessource : -1, 
      nom : nomRessource, 
      idTypeRessource : this.typeRessourceSelected.idTypeRessource }));
  }

}
