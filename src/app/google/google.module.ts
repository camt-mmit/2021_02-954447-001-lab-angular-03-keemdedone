import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleRoutingModule } from './google-routing.module';
import { GoogleEvevtsListPageComponent } from './pages/google-events/google-evevts-list-page/google-evevts-list-page.component';
import { GoogleComponent } from './pages/google/google.component';
import { GoogleAuthorizationPageComponent } from './pages/google-authorization-page/google-authorization-page.component';
import { GoogleUiModule } from './google-ui.module';
import { GoogleEventCreatePageComponent } from './pages/google-events/google-event-create-page/google-event-create-page.component';


@NgModule({
  declarations: [
    GoogleComponent,
    GoogleEvevtsListPageComponent,
    GoogleAuthorizationPageComponent,
    GoogleEventCreatePageComponent
  ],
  imports: [
    CommonModule,
    GoogleRoutingModule,
    GoogleUiModule,
  ]
})
export class GoogleModule { }
