import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { JwtToken } from '../models/jwt-token.model';
import { map, take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { State } from '../store';
import { isLoggedIn } from '../store/selectors/auth.selectors';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private store : Store<State>,
    private router : Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : Observable<boolean> {
      let isLog : boolean;
      return this.store.pipe(select(isLoggedIn)).pipe(
        map((isLogIn : boolean) => {
          if (!isLogIn) {
            this.router.navigate(['/signin']);
          }
  
         return isLogIn;
        }
        ));
  }
}
