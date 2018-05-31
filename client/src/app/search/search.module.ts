import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { SEARCH_ROUTES } from './search.routes';
import { LayoutModule } from '../shared/modules/layout.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './shared/store/search.effect';
import { SearchReducer } from './shared/store/search.reducers';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../shared/modules/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(SEARCH_ROUTES), 
    StoreModule.forFeature('search', SearchReducer),
    EffectsModule.forFeature([SearchEffects]),
    FormsModule
  ],
  declarations: [
    SearchComponent,
  
  ]
})
export class SearchModule { }


