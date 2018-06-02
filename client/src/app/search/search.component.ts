import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { searchPossibility } from './shared/models/searchPossibility.model';
import { Store, select } from '@ngrx/store';
import { State } from '../shared/store';
import { 
  AddEcole,
  AddSpecialite,
  AddMatiere,
  FetchEcoles,
  SetEcoleSelected,
  FetchSpecialites,
  SetSpecialiteSelected,
  FetchMatieres,
  SetMatiereSelected,
  FetchDroit} from './shared/store/search.actions';
import { searchType } from './shared/models/searchType.enum';
import { Router } from '@angular/router';
import { getEcoleSelectedSelector, getEcolesSelector, getSpecialitesSelector, getMatieresSelector, getDroitsSpeSelectedSelector } from './shared/store/search.selectors';
import { Droit } from '../monitoring/shared/models/droit.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public ecoles$ : Observable<searchPossibility[]>;
  public specialites$ : Observable<searchPossibility[]>;
  public matieres$ : Observable<searchPossibility[]>;
  public droitsUser$ : Observable<Droit[]>;
  public droitUser : Droit[];
  
  ngOnInit() {
    this.store.dispatch(new FetchEcoles());
    this.ecoles$ = this.store.pipe(select (getEcolesSelector));
    
    // Récupération des droits du user
    this.droitsUser$ = this.store.pipe(select(getDroitsSpeSelectedSelector));
    this.droitsUser$.subscribe( (droits : Droit[]) => {
      this.droitUser = droits;
    })
  }

  constructor( private store: Store<State>, private router: Router) {
  }

  public selectEcole(ecole : searchPossibility): void {
    this.store.dispatch(new SetEcoleSelected(ecole));
    this.store.dispatch(new FetchSpecialites());
    this.specialites$ = this.store.pipe(select(getSpecialitesSelector));
    
  }

  public selectSpecialite(spe : searchPossibility): void {
    this.store.dispatch(new SetSpecialiteSelected(spe));
    this.store.dispatch(new FetchMatieres());
    this.matieres$ = this.store.pipe(select(getMatieresSelector));

    // Récupération des droits du user sur cette spécialité
    this.store.dispatch(new FetchDroit());
  }

  public selectMatiere(matiere : searchPossibility): void {
    this.store.dispatch(new SetMatiereSelected(matiere));
    this.router.navigateByUrl('/matiere');
  }

  public ajouterEcole (nomEcole : string) {
    this.store.dispatch(new AddEcole(nomEcole));
    
  }

  public ajouterSpecialite (nomSpe : string) {
    this.store.dispatch(new AddSpecialite(nomSpe));
  }

  public ajouterMatiere (nomMatiere : string) {
    this.store.dispatch(new AddMatiere(nomMatiere));
  }

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
