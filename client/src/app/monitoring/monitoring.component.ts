import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../shared/store';
import { FetchSpecialite, SetSpecialiteSelected, FetchDroit, FetchMatiere, DeleteMatiere, FetchUser, SetUserSelected, FetchDroitUserSelected, UnsetDroitUserSelected, SetDroitUserSelected, FetchShareLink, JoinSpecialite } from './shared/store/monitoring.actions';
import { specialitesSelector, droitsSelector, matieresSelector, usersSelector, droitUserSelectedSelector, userSelectedSelector, getShareLinkSelector, specialitesSelectedSelector } from './shared/store/monitoring.selectors';
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

  public selectDroitLink: {idDroit:number, libelle : string}[];
  public droitLinkSelected : {idDroit:number, libelle : string};
  public tempsValidite: number;
  public lienPartage : string;

  public speSelected: Donnee;
  public lienRejoindre : string;

  constructor(
    private store : Store<State>
  ) { }

  ngOnInit() {
  
    this.droitLinkSelected = {idDroit : 1, libelle : 'Lire'};
    this.selectDroitLink = [
      {idDroit : 1, libelle : "Lire"},
      {idDroit : 2, libelle : "Ajouter"},
      {idDroit : 3, libelle : "Supprimer"},
      {idDroit : 4, libelle : "Administrer"}
    ];

    // Récupération des spécialités
    this.store.dispatch(new FetchSpecialite());
    this.specialites$ = this.store.pipe(select(specialitesSelector));
    this.specialites$.subscribe( (val : Donnee[]) => {
      this.specialites = val;
    });

     // Permet de caccher les panneau t'en qu'on a pas sélectionné une spe
    this.store.pipe(select(specialitesSelectedSelector)).subscribe( (spe : Donnee) => {
      this.speSelected = spe;
    })
   
    // Initialisation 
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

      // Recupétation des utilisateurs qui utlisent aussi la spé, uniquement si on a les doits
      if (this.possedeDroit('Administrer')) {
        this.store.dispatch(new FetchUser());
      }
    });

    // Récup des matières
    this.store.dispatch(new FetchMatiere());
    this.matieres$ = this.store.pipe(select(matieresSelector));
  }

  // Renvoie true si le droit associé est acqui, false sinon
  public possedeDroit(nomDroit : string) : boolean {
    let possedeDroit = false;
    if (this.droits) {
      this.droits.forEach((droit : Droit) => {
        if ( droit.intitule === nomDroit ) {
          possedeDroit = droit.estAcquis;
        }
    });
    }
   
    return possedeDroit;
  }
  

  // Supprimer une matiere
  deleteMatiere(matiere: Donnee) : void {
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

  // Permet de setter le bon droit pour le lien de partage
  chooseLevelLink (link) {
    this.droitLinkSelected = link;
  }

  //Comparaison ne fonctionne pas dans le nfIf
  plusPetitEgal (a, b) {
    return a <= b;
  }

  // Lance la requete pour obtenir le lien de paratge correspondant a la demande
  getSharedLink() {
    if (this.tempsValidite) {
     
      this.store.dispatch(new FetchShareLink({
        idDroit: this.droitLinkSelected.idDroit,
        temps: this.tempsValidite
      }));

      this.store.pipe(select(getShareLinkSelector)).subscribe((lien : string) => {
        this.lienPartage = lien;
      });
      
    }
  }

  public rejoindreGroupe () {
    if (this.lienRejoindre) {
      this.store.dispatch(new JoinSpecialite(this.lienRejoindre) );
    }
  }
}
