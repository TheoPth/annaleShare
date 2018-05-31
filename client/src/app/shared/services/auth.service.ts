import { Injectable  } from '@angular/core';
import { User } from '../models/user.model';
import { Observable ,  BehaviorSubject ,  timer ,  of ,  Subscription, ObservableLike } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtToken } from '../models/jwt-token.model';
import { tap ,  switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { TryRefreshToken } from '../store/action/auth.actions';

@Injectable()
export class AuthService {
  public subscription: Subscription;

  public jwtToken: BehaviorSubject<JwtToken> = new BehaviorSubject({
    isAuthenticated: null,
    expireDate: null,
    token: null
  });

  constructor(
    private http: HttpClient,
    private router: Router,
    private store : Store<State>
  ) {
    this.initToken();
    //this.subscription = this.initTimer();
  }

  public initTimer() {
    return timer(2000, 15000).pipe(
      tap (() => this.store.dispatch(new TryRefreshToken())));
    //   switchMap(() => {
    //     if (localStorage.getItem('jwt')) {
    //       return this.http.get<string>('/api/auth/refresh-token').pipe(
    //         tap((token: string) => {
    //           this.jwtToken.next({
    //             isAuthenticated: true,
    //             token: token
    //           });
    //           localStorage.setItem('jwt', token);
    //         })
    //       );
    //     } else {
    //       console.log('no token to refresh');
    //       this.subscription.unsubscribe();
    //       return of(null);
    //     }
    //   })
    // ).subscribe(() => {}, err => {
    //   this.jwtToken.next({
    //     isAuthenticated: false,
    //     token: null
    //   });
    //   localStorage.removeItem('jwt');
    //   this.subscription.unsubscribe();
    // });
  }


  private initToken(): void {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.jwtToken.next({
        isAuthenticated: true,
        token: token
      });
    } else {
      this.jwtToken.next({
        isAuthenticated: false,
        token: null
      });
    }
  }

  public signup(user: User): Observable<User> {
    return this.http.post<User>('/api/auth/signup', user);
  }

  public signin(credentials: { email: string, password: string}): Observable<string> {
   
    return this.http.post<string>('/api/auth/signin', credentials);
  }

  public logout(): void {
    this.jwtToken.next({
      isAuthenticated: false,
      token: null
    });
    localStorage.removeItem('jwt');
    this.router.navigate(['/signin']);
  }

  public refreshToken() : Observable<string> {
   
    return  this.http.get<string>('/api/auth/refresh-token');
  }

  public test(str :String): Observable<any> {
    return this.http.post<any>('/api/auth/addFile', str);
  }
}
