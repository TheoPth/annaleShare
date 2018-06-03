import { Injectable } from '@angular/core';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Donnee } from '../models/donnee.model';
import { Droit } from '../models/droit.model';
import { User } from '../../../shared/models/user.model';
import { UserMonitor } from '../models/userMonitor.model';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {
    
    
   
  constructor(public http : HttpClient) {

  }

  public getSpecialitesUser(): Observable<Donnee[]> {
    return this.http.get<Donnee[]>("/api/monitoring/getMatiereUser").pipe(
        map ((sPos : any) => {

          return sPos.map (r => ({id : r.idSpecialite, nom: r.nom}));
        })
      );
  }


  public getDroitUser(speId : number): Observable<Droit[]> {
    return this.http.get<Droit[]>("/api/monitoring/getDroitUserSpe/" + speId).pipe(
        map ((sPos : any) => {
          return sPos.map (r => ({idDroit : r.idDroit, estAcquis: r.estAcquis, intitule: r.intitule}));
        })
      );
  }

  // Renvoie toute les matières d'une spécialitée
  public getMatiereFromSpe (idSpe : number): Observable<Donnee[]> {
    return this.http.get<Donnee[]>("/api/monitoring/getMatiereFromSpe/" + idSpe).pipe(
      map ((sPos : any) => {
        return sPos.map (r => ({id : r.idMatiere, nom: r.Libelle}));
      })
    );
  }

  public supprimerMatiere(idMatiere: number): Observable<any> {
    return this.http.delete<any>("/api/monitoring/deleteMatiere/" + idMatiere);
  }

  public getUser(idSpe: number): Observable<UserMonitor[]> {
    return this.http.get<UserMonitor[]>("/api/monitoring/getUser/" + idSpe).pipe(
      map ((sPos : any) => {
        return sPos.map (r => ({id : r.id, nom: r.nom, prenom : r.prenom}));
      })
    );;
  }

  public getDroitUserSelected(speId : number, iduser : number): Observable<Droit[]> {
    return this.http.get<Droit[]>("/api/monitoring/getDroitUserSpe/" + speId +"/" + iduser).pipe(
        map ((sPos : any) => {
          return sPos.map (r => ({idDroit : r.idDroit, estAcquis: r.estAcquis, intitule: r.intitule}));
        })
      );
  }

  public setDroitUser(idSpe : number, idUser : number, idDroit : number): Observable<any> {
    return this.http.post<any>("/api/monitoring/setDroitUser", {idSpe : idSpe, idUser : idUser, idDroit : idDroit});
  }

  public unsetDroitUser(idSpe : number, idUser : number, idDroit : number): Observable<any> {
    return this.http.post<any>("/api/monitoring/unsetDroitUser", {idSpe : idSpe, idUser : idUser, idDroit : idDroit});
  }

  public getLienPartage(idDroit : number, temps : number, idSpecialite : number): Observable<string> {
    return this.http.get<string>("/api/monitoring/getLienPartage/" + idDroit+ "/" + temps + "/"+ idSpecialite );
  }

  public joinTeam(lien : string ): Observable<string> {
    return this.http.post<string>("/api/monitoring/joinTeam", {lien : lien});
  }
}