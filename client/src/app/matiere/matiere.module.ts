import { NgModule } from '@angular/core';
import { MatiereComponent } from './matiere/matiere.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RessourceReducer } from './shared/store/ressource.reducers';
import { RessourceEffects } from './shared/store/ressource.effect';
import { MATIERE_ROUTES } from './matiere.route';;
import { FormsModule } from '@angular/forms';
import { RessourcesComponent } from './shared/components/ressources/ressources.component';
import { AffRessourceComponent } from './shared/components/aff-ressource/aff-ressource.component';
import { SafePipe } from './shared/pipes/safe.pipe';
import { CoreModule } from '../shared/modules/core.module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(MATIERE_ROUTES), 
    StoreModule.forFeature('matiere', RessourceReducer),
    EffectsModule.forFeature([RessourceEffects]),
    FormsModule
  ],
  declarations: [
    MatiereComponent,
    RessourcesComponent, 
    AffRessourceComponent, 
    SafePipe
  ]
})
export class MatiereModule { }
