
import { environment } from '../environments/environment';

// modules natifs
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// components
import { AppComponent } from './app.component';


// routing
import { APP_ROUTING } from './app.routing';

// Modules
import { CoreModule } from './shared/modules/core.module';

// ngrx 
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducersMap } from './shared/store';
import { AuthEffects} from './shared/store/effects/auth.effects';
import { LayoutModule } from './shared/modules/layout.module';

@NgModule({

  // Permet aux autres directives de les voir aussi (pipe ou component)
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTING),
    // forRoot car on est dans le app module, feature pour ajouter les effets ou aciton
    StoreModule.forRoot(reducersMap),
    EffectsModule.forRoot([AuthEffects]),
    // Si grosse appli vaut mieux mettre un nom sinon tout va se retoruver dans le store
    StoreDevtoolsModule.instrument({
      name: 'Ngrx Photos',
      logOnly: environment.production
    }),
    CoreModule,
    LayoutModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
