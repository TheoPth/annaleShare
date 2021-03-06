import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/do';
import { authTokenSelector } from "../store/selectors/auth.selectors";
import { select, Store } from "@ngrx/store";
import { State } from "../store";
import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    public token: string;

    constructor(private store: Store<State>, 
    private router: Router){
     
      this.store.pipe(
        select(authTokenSelector)
      ).subscribe( (token: string) => {
        this.token = token;
      });
    }

    /**
     * inter
     */
    public inter(req, next) {
      if (this.token) {
        const authReq = req.clone({
          headers: req.headers.set('authorization', this.token)
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
          if (err.status === 401) {
            this.router.navigateByUrl('/signin');
          }
        }
      });
    }
}
