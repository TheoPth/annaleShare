import { Injectable } from '@angular/core';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { searchPossibility } from '../models/searchPossibility.model';
import { searchType } from '../models/searchType.enum'; 

@Injectable({
  providedIn: 'root'
})
export class SearchService {
    
  constructor(public http : HttpClient) {}

  public getPossibility(searchPossibility: searchPossibility): Observable<searchPossibility[]> {
    // Recherche de dossier école
    switch (searchPossibility.type) {
      case searchType.SPECIALITE :
        return this.getMatiere(searchPossibility).pipe(
          map ((sPos : any) => {
            return sPos.map (r => ({id : r.idMatiere, wording : r.Libelle, type : searchType.MATIERE}));
          })
        );
      case searchType.ECOLE : 
      return this.getSpecialite(searchPossibility).pipe(
        map ((sPos : any) => {
          return sPos.map (r => ({id : r.idSpecialite, wording : r.nom , type : searchType.SPECIALITE}));
        })
      );
      case searchType.MATIERE :
        return of();
    }
  }
  
  public getSpecialite(searchPossibility: searchPossibility): Observable<searchPossibility[]> {
    return this.http.post<searchPossibility[]>("/api/search/getSpecialite", searchPossibility);
  }

  public getMatiere (searchPossibility: searchPossibility): Observable<searchPossibility[]> {
    return this.http.post<searchPossibility[]>("/api/search/getMatiere", searchPossibility);
  }

  public getEcole (): Observable<searchPossibility[]> {
    return this.http.get<searchPossibility[]>("/api/search/getEcole").pipe(
      map ((sPos : any) => {
        return sPos.map (r => ({id : r.idEcole, wording : r.nom  , type : searchType.ECOLE}));
      })
    );
  }

  public getAllSpecilitiesFromSpeciality(searchPossibility: searchPossibility) : Observable<searchPossibility[]> {
    return this.http.post<searchPossibility[]>("/api/search/getAllSpecilitiesFromSpeciality", searchPossibility).pipe(
      map ((sPos : any) => {
        return sPos.map (r => ({id : r.idSpecialite, wording : r.nom , type : searchType.SPECIALITE}));
      })
    ); 
  }

  public getParent(searchPossibility: searchPossibility) : Observable<searchPossibility> {
    return this.http.post<searchPossibility>("/api/search/getParent", searchPossibility).pipe(
      map ((sPos : any) => {
        return sPos.map (r => ({id : r.idEcole, wording : r.nom  , type : searchType.ECOLE}));
      })
    ); 
  }

  public addEcole(ecole: string): Observable<any>{
    return this.http.post<any>("/api/search/addEcole", {"nomEcole" : ecole});
  }

  public addSpecialite(spe: any): Observable<any>{
    return this.http.post<any>("/api/search/addSpecialite", {"specialite" : spe});
  }

  public addMatiere(matiere: any): Observable<any>{
    return this.http.post<any>("/api/search/addMatiere", {"matiere" : matiere});
  }

}
