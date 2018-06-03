import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../shared/store';
import { FetchInitTypeRessourceSuccess, 
  FetchInitTypeRessource, 
  SetRessourceSelected, 
  SetTypeRessource, 
  AjoutTypeRessource} from '../shared/store/ressource.actions';
import { ressourceTypeSelector } from '../shared/store/ressource.selectors';
import { Observable } from 'rxjs';
import { typeRessource } from '../shared/models/typeRessource.model';
import { Router } from '@angular/router';
import { getMatiereSelectedSelector, getDroitsSpeSelectedSelector } from '../../search/shared/store/search.selectors';
import { searchPossibility } from '../../search/shared/models/searchPossibility.model';
import { Droit } from '../../monitoring/shared/models/droit.model';
import { FetchDroit } from '../../search/shared/store/search.actions';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css'],
})
export class MatiereComponent implements OnInit {
  public ressourceType$: Observable<typeRessource[]>;
  public matiere : searchPossibility;
  public droitsUser$ : Observable<Droit[]>;
  public droitUser : Droit[];

  public currentState: string ='shown';
  
  constructor(
    private store : Store<State>,
    private router: Router
  ) {
    this.ressourceType$ = this.store.pipe(select(ressourceTypeSelector));
    let matiere$ = this.store.pipe(select(getMatiereSelectedSelector));
    matiere$.subscribe(val => this.matiere = val);
  }

  ngOnInit() {
    this.store.dispatch(new FetchInitTypeRessource());

    this.droitsUser$ = this.store.pipe(select(getDroitsSpeSelectedSelector));
    this.droitsUser$.subscribe( (droits : Droit[]) => {
      this.droitUser = droits;
    })
    
     // Récupération des droits du user sur cette spécialité
     this.store.dispatch(new FetchDroit());
  }
  
  public pickTypeRessource(ressource: typeRessource) {
    this.store.dispatch(new SetTypeRessource(ressource));
    this.router.navigateByUrl('/matiere/ressources');
    
  }

 public addTypeRessource(nomTypeRessource : string) {
  this.store.dispatch(new AjoutTypeRessource(
    {idTypeRessource : -1, 
    name : nomTypeRessource, 
    idMatiere : this.matiere.id }))
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
