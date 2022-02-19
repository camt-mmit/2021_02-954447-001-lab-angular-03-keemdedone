import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleEventsListComponent } from './google-events/google-events-list/google-events-list.component';
import { GoogleEventControlComponent } from './google-events/google-event-control/google-event-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleEventFormComponent } from './google-events/google-event-form/google-event-form.component';



@NgModule({
  declarations: [
    GoogleEventsListComponent,
    GoogleEventControlComponent,
    GoogleEventFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    GoogleEventsListComponent,
    GoogleEventControlComponent,
    GoogleEventFormComponent
  ]
})
export class GoogleUiModule { }
