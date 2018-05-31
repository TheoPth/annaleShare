import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { JwtToken } from '../../models/jwt-token.model';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../../store';
import { isLoggedIn } from '../../store/selectors/auth.selectors';
import { Logout } from '../../store/action/auth.actions';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  public isLoggedIn$ : Observable<boolean>;
  
  constructor(private authService: AuthService,
  private store: Store<State>) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn)
    )
  }

  public logout(): void {
    this.store.dispatch( new Logout());
  }
}
