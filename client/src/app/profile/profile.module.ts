import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { PROFILE_ROUTES } from './profile.routes';
import { LayoutModule } from '../shared/modules/layout.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PROFILE_ROUTES), 
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule { }


