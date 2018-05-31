import { Injectable } from '@angular/core';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { typeRessource } from '../models/typeRessource.model';
import { searchPossibility } from '../../../search/shared/models/searchPossibility.model';
import { ressource } from '../models/ressource.model';
import { HttpParams } from '@angular/common/http';
import { UploadFile } from '../store/ressource.actions';
import { UploadFileRessource } from '../models/uploadFileRessource.model';
import { RessourceFile } from '../models/ressourceFile.model';


@Injectable({
  providedIn: 'root'
})
export class MatiereService {
    
   
   
   
  constructor(public http : HttpClient) {};
    
  
  public getTypeRessourceFromMatiere(matiereSelected: searchPossibility): Observable<typeRessource[]> {
    return this.http.post<typeRessource[]>("/api/matiere/getTypeRessourceFromMatiere", matiereSelected).pipe(
      map ((sPos : any) => {
          return sPos.map(r => ({idTypeRessource : r.idTypeRessource, name : r.name, idMatiere : r.idMatiere}));
        })
      );
  }

  public getRessourceFromTypeRessource(ressourceTypeSelected: typeRessource): any {
    return this.http.get<typeRessource[]>("/api/matiere/getRessourceFromTypeRessource/" + ressourceTypeSelected.idTypeRessource).pipe(
      map ((sPos : any) => {
          return sPos.map(r => ({idRessource : r.idRessource, 
            lienPdf : r.lienPdf, 
            nom : r.nom, 
            idTypeRessource :r.idTypeRessource}));
        })
      );
  }


  public addRessource(ressource: ressource): any {
    return this.http.post<typeRessource[]>("/api/matiere/addRessource", ressource);
  }


  public addTypeRessource(typeRessource: typeRessource): any {
    return this.http.post<typeRessource[]>("/api/matiere/addTypeRessource", typeRessource);
  }

  public uploadFile(file: UploadFileRessource) {
    const _formData = new FormData();
    _formData.append('file', file.file, file.file.name);
    _formData.append('idRessource', JSON.stringify(file.idRessource));
    _formData.append('type', "pdf");
    return this.http.post<any>('/api/file/addFile',  _formData);
  }

  public downloadFile(idFile : number) {
    return this.http.get('/api/file/downloadFile/' + idFile, {responseType: 'text'});
  }

  // Get all ressources File of a ressource
  public downloadRessourceFile(idRessource: number): Observable<RessourceFile[]> {
    return this.http.get<RessourceFile[]>('/api/file/downloadFilesRessource/' + idRessource).pipe(
      map ((sPos : any) => {
          return sPos.map(r => ({type : r.type, 
            link : r.idFile, 
            idRessource : r.idRessource
          }));
        })
      );;
  } 
}
