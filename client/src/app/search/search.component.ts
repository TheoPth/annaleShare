import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { searchPossibility } from './shared/models/searchPossibility.model';
import { Store, select } from '@ngrx/store';
import { State } from '../shared/store';
import { SetParentSelection, 
  FetchSearchPossibility,
   FetchInitEcole, 
  FetchSpecialitiesFromSpecialite,
  FetchEcoleParent, 
  SetMatiereSelection,
  AddEcole,
  AddSpecialite,
  AddMatiere} from './shared/store/search.actions';
import { searchPossibilitySelector, searchParentSelector } from './shared/store/search.selectors';
import { searchType } from './shared/models/searchType.enum';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public  search$ : Observable<searchPossibility[]>;
  public  parent$ : Observable<searchPossibility>;
  public typeAct : searchType;
  public parent : searchPossibility;
  public pos : searchPossibility;
  
  ngOnInit() {
    this.store.dispatch(new FetchInitEcole());
    this.typeAct = searchType.ECOLE;
  }

  constructor( private store: Store<State>, private router: Router) {
    this.search$ = this.store.pipe(select(searchPossibilitySelector));
    this.parent$ = this.store.pipe(select(searchParentSelector));


    let sub = this.parent$.subscribe(value => this.parent = value );
    let sub2 = this.search$.subscribe(value => this.pos = value[0]);

  }

  public choose (choix : searchPossibility): void {
    this.typeAct = this.typeSuiv(this.typeAct);
    if (choix.type != searchType.MATIERE) {
      this.store.dispatch(new SetParentSelection(choix));
      this.store.dispatch(new FetchSearchPossibility());
    } else {
      this.store.dispatch(new SetMatiereSelection(choix));
      this.router.navigateByUrl('/matiere');
    }
  }

  public precedent(): void {
    this.typeAct = this.typePrec(this.typeAct);
    
    
    if (this.typePrec(this.typeAct) == searchType.SPECIALITE) {
      this.store.dispatch(new FetchSpecialitiesFromSpecialite(this.parent));
    } else if (this.typePrec(this.typeAct) == searchType.ECOLE) {
      this.store.dispatch(new FetchInitEcole());
    }
  }


  public typeSuiv (type : searchType) : searchType {

    switch (type) {
      case searchType.ECOLE  : {
        return searchType.SPECIALITE
      }
      case searchType.SPECIALITE  : {
        return searchType.MATIERE
      }
      case searchType.MATIERE  :{
        return searchType.MATIERE
      }

    }
   
  }
  public typePrec (type : searchType) : searchType {

    switch (type) {
      case searchType.ECOLE  : {
        return searchType.ECOLE
      }
      case searchType.SPECIALITE  : {
        return searchType.ECOLE
      }
      case searchType.MATIERE  :{
        return searchType.SPECIALITE
      }
    }
   
  }

  public ajouter(nom : string) : void {
    
    if (this.typeAct == searchType.ECOLE) {
      this.store.dispatch(new AddEcole(nom));
    } else if (this.typeAct == searchType.SPECIALITE) {
      this.store.dispatch(new AddSpecialite({nom : nom, idEcole : this.parent.id}));
    } else if (this.typeAct == searchType.MATIERE) {
      this.store.dispatch(new AddMatiere({nom : nom, idSpecialite : this.parent.id}));
    }
  }
}
