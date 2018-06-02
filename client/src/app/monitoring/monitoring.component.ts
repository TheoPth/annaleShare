import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../shared/store';
import { FetchSpecialite, SetSpecialiteSelected, FetchDroit, FetchMatiere, DeleteMatiere, FetchUser, SetUserSelected, FetchDroitUserSelected, UnsetDroitUserSelected, SetDroitUserSelected } from './shared/store/monitoring.actions';
import { specialitesSelector, droitsSelector, matieresSelector, usersSelector, droitUserSelectedSelector, userSelectedSelector } from './shared/store/monitoring.selectors';
import { select } from '@ngrx/store';
import { Donnee } from './shared/models/donnee.model';
import { Observable, of } from 'rxjs';
import { Droit } from './shared/models/droit.model';
import { UserMonitor } from './shared/models/userMonitor.model';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {
  public specialites : Donnee[];
  public specialites$ : Observable<Donnee[]>;
  public droits$ : Observable<Droit[]>;
  public droits : Droit[];
  public peutSuppr: Droit;
  public matieres$ : Observable<Donnee[]>;
  public users$ : Observable<UserMonitor[]>;
  public usersSelectedDroits$ : Observable<Droit[]>;
  public userSelected$ : Observable<UserMonitor>;
  public userSelected : UserMonitor;


  constructor(
    private store : Store<State>
  ) { }

  ngOnInit() {

    // Récupération des spécialités
    this.store.dispatch(new FetchSpecialite());
    this.specialites$ = this.store.pipe(select(specialitesSelector));
    this.specialites$.subscribe( (val : Donnee[]) => {
      this.specialites = val;
    })

    // Initialisation pour éviter les undifineds
    this.users$ = this.store.pipe(select(usersSelector));

    // Récupération des droits de l'utilisateur selectionné
    this.usersSelectedDroits$ = this.store.pipe(select(droitUserSelectedSelector));

    // Recupère le user selected
    this.userSelected$ = this.store.pipe(select(userSelectedSelector));

    this.userSelected$.subscribe( (user : UserMonitor) => {
      this.userSelected = user;
    });
  
  }

  // Fetch toutes les données de cette spécialité
  public afficheSpe(spe) {
    this.store.dispatch(new SetSpecialiteSelected(spe));
    this.store.dispatch(new FetchDroit());
    this.droits$ = this.store.pipe (select(droitsSelector));
    
    this.droits$.subscribe( (val : Droit[]) => {
      this.droits = val;
    });

    // Récup des matières
    this.store.dispatch(new FetchMatiere());
    this.matieres$ = this.store.pipe(select(matieresSelector));

    // Recupétation des utilisateurs qui utlisent aussi la spé
    this.store.dispatch(new FetchUser());

    

  }

  // Renvoie true si le droit associé est acqui, false sinon
  peutFaire (num : number) {
    let res = false;
    if (this.droits) {
      this.droits.forEach(element => {
        if (element.idDroit === num) {
          res = element.estAcquis;
        }
      });
    }
    return res;
  }
  

  // Supprimer une matiere
  supprimerMatiere(matiere: Donnee) : void {
    this.store.dispatch(new DeleteMatiere(matiere));
  }

  setUserActif(user : UserMonitor): void {
    this.store.dispatch(new SetUserSelected(user));
    // Récupération de l'utilisateur selectionne
    this.store.dispatch(new FetchDroitUserSelected());
  }

  // toggle le droit de l'utilisateur selectionnee 
  toggleDroit(droit : Droit) : void{
    if (droit.estAcquis) {
      this.store.dispatch(new UnsetDroitUserSelected(droit));
    }
    else {
      this.store.dispatch(new SetDroitUserSelected(droit));
    }
  }

}
