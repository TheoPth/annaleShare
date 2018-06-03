import { Route } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const APP_ROUTING: Route[] = [
  { path: 'signup' , component: SignupComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'search',  canActivate : [AuthGuard], loadChildren: 'app/search/search.module#SearchModule'},
  { path: 'matiere',  canActivate : [AuthGuard], loadChildren: 'app/matiere/matiere.module#MatiereModule'},
  { path : 'monitoring',  canActivate : [AuthGuard], loadChildren: 'app/monitoring/monitoring.module#MonitoringModule'},
  { path: "**", redirectTo:'signup'}
];
