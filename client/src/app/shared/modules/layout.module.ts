import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';


//Common module est importer partout autant le mettre dans layout module qui lui aussi est importé partout
const MODULE = [
  FlexLayoutModule,
  MaterialModule,
  CommonModule
];

@NgModule({
  imports: MODULE,
  exports: MODULE,
  declarations: []
})
export class LayoutModule { }