import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout.module';

// Components
import { SignupComponent } from '../../components/signup/signup.component';
import { SigninComponent } from '../../components/signin/signin.component';
import { TopbarComponent } from '../../shared/components/topbar/topbar.component';
import { ModalAjoutComponent } from '../../shared/components/modal-ajout/modal-ajout.component';
import { ListeClickableComponent } from '../../shared/components/liste-clickable/liste-clickable.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

// Service 
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service'

// Interceptor
import { AuthInterceptor } from '../interceptors/auth.interceptor';

// Guard
import { AuthGuard } from '../guards/auth.guard';

// Module
import { RouterModule } from '@angular/router';
import { SpeInterceptor } from '../../monitoring/shared/interceptors/spe-interceptor';
import { MatiereInterceptor } from '../../matiere/shared/interceptors/matiere.interceptor';



const COMPONENTS = [
  SignupComponent,
  SigninComponent,
  TopbarComponent,
  ModalAjoutComponent,
  ListeClickableComponent
];

// Pas besoin de mettre common module, il est dans layout qui donne aussi material
@NgModule({

  imports: [
    CommonModule,
    HttpClientModule,
    LayoutModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  exports:COMPONENTS, 
  declarations: [
    COMPONENTS
  ],
  providers :[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpeInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MatiereInterceptor,
      multi: true
    },
    AuthService,
    UserService,
    AuthGuard,
  ]
})
export class CoreModule { }
