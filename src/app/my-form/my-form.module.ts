import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule } from '@angular/forms';

import { MyFormRoutingModule } from './my-form-routing.module';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { SimpleFormPageComponent } from './simple-form-page/simple-form-page.component';
import { MyFormComponent } from './my-form/my-form.component';


@NgModule({
  declarations: [
    SimpleFormComponent,
    SimpleFormPageComponent,
    MyFormComponent
  ],
  imports: [
    CommonModule,
    MyFormRoutingModule,
    ReactiveFormsModule,
  ]
})
export class MyFormModule { }
