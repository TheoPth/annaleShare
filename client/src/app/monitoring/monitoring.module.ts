import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitoringComponent } from './monitoring.component';
import { CoreModule } from '../shared/modules/core.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { MonitoringReducer } from './shared/store/monitoring.reducers';
import { MonitoringEffects } from './shared/store/monitoring.effects';
import { MONITORING_ROUTES } from './monitoring.routes';
import { PossedeDroitDirective } from './shared/directives/possede-droit.directive';
import { CheckboxDroitDirective } from './shared/directives/checkbox-droit.directive';
import { SpeInterceptor } from './shared/interceptors/spe-interceptor';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(MONITORING_ROUTES), 
    StoreModule.forFeature('monitoring', MonitoringReducer),
    EffectsModule.forFeature([MonitoringEffects]),
    FormsModule
  ],
  declarations: [MonitoringComponent, PossedeDroitDirective, CheckboxDroitDirective],
  providers : [ ]
})
export class MonitoringModule { }
