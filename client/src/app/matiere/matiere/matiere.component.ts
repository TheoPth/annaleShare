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
import { searchMatiereSelected } from '../../search/shared/store/search.selectors';
import { searchPossibility } from '../../search/shared/models/searchPossibility.model';


@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {
  public ressourceType$: Observable<typeRessource[]>;
  public matiere : searchPossibility;
  
  constructor(
    private store : Store<State>,
    private router: Router
  ) {
    this.ressourceType$ = this.store.pipe(select(ressourceTypeSelector));
    let matiere$ = this.store.pipe(select(searchMatiereSelected));
    matiere$.subscribe(val => this.matiere = val);
  }

  ngOnInit() {
    this.store.dispatch(new FetchInitTypeRessource());
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
}
