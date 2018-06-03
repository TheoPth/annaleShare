import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Store, select } from '@ngrx/store';
import { State } from '../../shared/store';
import { Observable, Subject } from 'rxjs';
import { TrySignin } from '../../shared/store/action/auth.actions';
import { errorAuthSelector, isLoggedIn } from '../../shared/store/selectors/auth.selectors';
import { HttpRequest } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpEventType } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Config } from 'protractor';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {
  public form: FormGroup;
  public error$: Observable<string>;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private store: Store<State>,

  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    });

    this.error$ = this.store.pipe(
      select(errorAuthSelector));

    let auth$ = this.store.pipe(select(isLoggedIn));
    
    
    auth$.subscribe(val => {
      if (val) {
        this.router.navigateByUrl('/search');
      }
    });
  }

  public submit(): void {
    this.store.dispatch(new TrySignin(this.form.value));
  }
}