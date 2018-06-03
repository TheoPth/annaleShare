import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/do';
import { select, Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

import { MonitoringState } from "../../../monitoring/shared/store/monitoring.reducers";
import { Donnee } from "../../../monitoring/shared/models/donnee.model";
import { getSpecialiteSelectedSelector } from '../../../search/shared/store/search.selectors'
import { searchPossibility } from "../../../search/shared/models/searchPossibility.model";

@Injectable()
export class MatiereInterceptor implements HttpInterceptor {
    public spe: searchPossibility;

    constructor(private store: Store<MonitoringState>, 
    private router: Router){
      
      this.store.pipe(
        select(getSpecialiteSelectedSelector)
      ).subscribe( (spe: searchPossibility) => {
        this.spe = spe;
      });
    }

    /**
     * inter
     */
    public inter(req, next) {
      if (this.spe) {
        
        const authReq = req.clone({
          headers: req.headers.set('matierespe', this.spe.id)
        });
        return next.handle(authReq);
      } else {
        return next.handle(req);
      }
      
    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // Intercept le retour pour l'erreur 401 
      return this.inter(req, next).do ((event : HttpEvent<any>) => {
          // Dans tout les autre cas que les erreurs
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 403) {
            alert ("Vous n'avez pas les droits suffisants pour réaliser cette action.");
          }
        }
      });
    }
}
