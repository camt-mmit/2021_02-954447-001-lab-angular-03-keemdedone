import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule } from '@angular/forms';

import { MyFormRoutingModule } from './my-form-routing.module';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { SimpleFormPageComponent } from './simple-form-page/simple-form-page.component';
import { MyFormComponent } from './my-form/my-form.component';
import { SimpleFormListComponent } from './simple-form-list/simple-form-list.component';
import { SimpleFormListPageComponent } from './simple-form-list-page/simple-form-list-page.component';


@NgModule({
  declarations: [
    SimpleFormComponent,
    SimpleFormPageComponent,
    MyFormComponent,
    SimpleFormListComponent,
    SimpleFormListPageComponent
  ],
  imports: [
    CommonModule,
    MyFormRoutingModule,
    ReactiveFormsModule,
  ]
})
export class MyFormModule { }
