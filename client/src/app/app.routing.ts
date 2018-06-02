import { Route } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const APP_ROUTING: Route[] = [
  { path: 'signup' , component: SignupComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'profile',  canActivate : [AuthGuard], loadChildren: 'app/profile/profile.module#ProfileModule'} ,
  { path: 'search', loadChildren: 'app/search/search.module#SearchModule'},
  { path: 'matiere', loadChildren: 'app/matiere/matiere.module#MatiereModule'},
  { path : 'monitoring', loadChildren: 'app/monitoring/monitoring.module#MonitoringModule'},
  { path: "**", redirectTo:'signin'}
];
