import { Injectable } from '@angular/core';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { searchPossibility } from '../models/searchPossibility.model';
import { searchType } from '../models/searchType.enum'; 
import { Droit } from '../../../monitoring/shared/models/droit.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
    
  constructor(public http : HttpClient) {}
  
  public getSpecialites(idEcole : number): Observable<searchPossibility[]> {
    return this.http.post<searchPossibility[]>("/api/search/getSpecialites", {idEcole : idEcole}).pipe(
      map ((sPos : any) => {
        return sPos.map (r => ({id : r.idSpecialite, wording : r.nom , type : searchType.SPECIALITE}));
      })
    );;
  }

  public getMatieres (idSpe : number): Observable<searchPossibility[]> {
    return this.http.get<searchPossibility[]>("/api/search/getMatieres/" + idSpe).pipe(
      map ((sPos : any) => {
        if (!sPos.err) {
          return sPos.map (r => ({id : r.idMatiere, wording : r.Libelle, type : searchType.MATIERE}));
        } else {
          return null;
        }
        
      })
    );;
  }

  public getEcoles(): Observable<searchPossibility[]> {
    return this.http.get<searchPossibility[]>("/api/search/getEcoles").pipe(
      map ((sPos : any) => {
        return sPos.map (r => ({id : r.idEcole, wording : r.nom  , type : searchType.ECOLE}));
      })
    );
  }

  public addEcole(nomEcole : string): Observable<any>{
    return this.http.post<any>("/api/search/addEcole", {nomEcole : nomEcole});
  }

  public addSpecialite(nomSpe: string, idEcole : number): Observable<any>{
    return this.http.post<any>("/api/search/addSpecialite", {nomSpe : nomSpe,  idEcole: idEcole});
  }

  public addMatiere(nomMatiere : string, idSpecialite : number): Observable<any>{
    return this.http.post<any>("/api/search/addMatiere", {nomMatiere : nomMatiere, idSpecialite : idSpecialite});
  }

  public getDroitUserSpeSelected(idSpe: number):Observable<Droit[]> {
    return this.http.get<Droit[]>("/api/monitoring/getDroitUserSpe/" + idSpe).pipe(
      map ((sPos : any) => {
        return sPos.map (r => ({idDroit : r.idDroit, estAcquis: r.estAcquis, intitule: r.intitule}));
      })
    );
  }

}
