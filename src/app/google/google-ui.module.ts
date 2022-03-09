import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleEventsListComponent } from './google-events/google-events-list/google-events-list.component';
import { GoogleEventControlComponent } from './google-events/google-event-control/google-event-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleEventFormComponent } from './google-events/google-event-form/google-event-form.component';
import { GoogleContactsListComponent } from './google-contacts/google-contacts-list/google-contacts-list.component';
import { GoogleContactsControlComponent } from './google-contacts/google-contacts-control/google-contacts-control.component';
import { GoogleContactsFormComponent } from './google-contacts/google-contacts-form/google-contacts-form.component';



@NgModule({
  declarations: [
    GoogleEventsListComponent,
    GoogleEventControlComponent,
    GoogleEventFormComponent,
    GoogleContactsListComponent,
    GoogleContactsControlComponent,
    GoogleContactsFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    GoogleEventsListComponent,
    GoogleEventControlComponent,
    GoogleEventFormComponent,
    GoogleContactsListComponent,
    GoogleContactsControlComponent,
    GoogleContactsFormComponent
  ]
})
export class GoogleUiModule { }
