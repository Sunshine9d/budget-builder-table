import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import {InputComponent} from './components/input/input.component';



@NgModule({
  declarations: [
    HeaderComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    InputComponent,
  ]
})
export class SharedModule { }
