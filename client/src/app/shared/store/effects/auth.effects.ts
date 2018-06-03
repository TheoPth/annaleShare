import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AuthActions, TrySignup, SignupSuccess,
  SignupError, TRY_SIGNUP, SIGNUP_ERROR, SIGNUP_SUCCESS, SigninSuccess,
  SigninError, TRY_SIGNIN, TrySignin, TRY_REFRESH_TOKEN,
  LOGOUT, TRY_FETCH_CURRENT_USER, SetCurrentUser, TryFetchCurrentUser, SIGNIN_SUCCESS
} from '../action/auth.actions';
import { map, exhaustMap, catchError, tap, switchMap, withLatestFrom } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { of, Subscription, Observable, empty } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '..';
import { authTokenSelector } from '../selectors/auth.selectors';
import { UserService } from '../../services/user.service';


// Permet d'ajouter des éléments comme Action 
@Injectable()
export class AuthEffects {
  private subscription: Subscription;
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<State>,
    private userService: UserService
  ) { };


  @Effect()
  trySignup$ = this.actions$.pipe(
    // Permet de reconnaitre le nom de l'action
    ofType(TRY_SIGNUP),
    map((action: TrySignup) => action.payload),

    // Permet de limiter à une inscription en même temps
    exhaustMap((user: User) =>
      this.authService
        .signup(user)
        .pipe(
          map(user => {
            return new SignupSuccess(user)
          }),
          catchError(error => of(new SignupError(error)))
        )
    )
  );

  @Effect({ dispatch: false })
  signupSucess$ = this.actions$.pipe(
    ofType(SIGNUP_SUCCESS),
    tap(() => this.router.navigate(['/signin']))
  );

  @Effect()
  trySignin$ = this.actions$.pipe(
    // Permet de reconnaitre le nom de l'action
    ofType(TRY_SIGNIN),
    map((action: TrySignin) => action.payload),
    // Permet de limiter à une inscription en meme temps
    switchMap((credentials: { email: string, password: string }) => {
      return this.authService.signin(credentials).pipe(
        map((token: string) => {
          localStorage.setItem('token', token);
          return new SigninSuccess(token);
        }),
        catchError((err: any) => {
          return of(new SigninError(err.error));
        })
      )
    }));

  // pour que ngRx ne s'attende pas à rencoyer une nouvelle action
  @Effect({ dispatch: false })
  signinSuccess$ = this.actions$.pipe(
    ofType(SIGNIN_SUCCESS),
    // Permet de faire un effet de bord lors de l'emission de l'observable
    tap(() => {
      
      if (typeof this.subscription === 'undefined' || this.subscription.closed) {
        this.subscription = this.authService.initTimer().subscribe();
        //this.router.navigateByUrl('/search');
      }
    })
  );

  @Effect()
  TryRefreshToken = this.actions$.pipe(
    ofType(TRY_REFRESH_TOKEN),
    // Permet de faire la selection que si la valeur prec était null
    withLatestFrom(this.store.pipe(select(authTokenSelector))),
    switchMap(([action, token]) => {

      if (token && token != null) {
        return this.authService.refreshToken().pipe(
          map((token: string) => {
            // On garde la sub pour pouvoir la couper si le token est pas bon ou si y a déconnection
            localStorage.setItem('token', token);
            return new SigninSuccess(token);
          }),
          catchError((err: any) => {
            if (this.subscription) {
              this.subscription.unsubscribe()
            }
            return empty();
          })
        );
      } else {
        return empty()
      }
    }),

  );


  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    // Permet de reconnaitre le nom de l'action
    ofType(LOGOUT),
    // Permet de faire un effet de bord lors de l'emission de l'obeservable
    tap(() => {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      localStorage.removeItem('token');
      this.router.navigateByUrl('/signin');

    })
  );

  @Effect()
  tryFetchCurrentUser$ = this.actions$.pipe(
    ofType(TRY_FETCH_CURRENT_USER),
    switchMap(() => {
      return this.userService.getCurrentUser();
    }),
    map((user: User) => {
      return new SetCurrentUser(user);
    }),
    catchError((err: any) => {
      console.log('error fetch current user');
      return empty();
    })
  );

}