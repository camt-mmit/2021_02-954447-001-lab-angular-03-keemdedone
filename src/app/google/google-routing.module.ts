import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleAuthorizationPageComponent } from './pages/google-authorization-page/google-authorization-page.component';
import { GoogleContactCreatePageComponent } from './pages/google-contacts/google-contact-create-page/google-contact-create-page.component';
import { GoogleContactsListPageComponent } from './pages/google-contacts/google-contacts-list-page/google-contacts-list-page.component';
import { GoogleEventCreatePageComponent } from './pages/google-events/google-event-create-page/google-event-create-page.component';
import { GoogleEvevtsListPageComponent } from './pages/google-events/google-evevts-list-page/google-evevts-list-page.component';
import { GoogleComponent } from './pages/google/google.component';

const routes: Routes = [
  {
    path:'authorization',
    component: GoogleAuthorizationPageComponent,
  },
  {
    path: '',
    component: GoogleComponent,
    children: [
      {
        path: '',
        redirectTo: 'events',
        pathMatch: 'full',
      },
      {
        path: 'events',
        component: GoogleEvevtsListPageComponent,
      },
      {
        path:'events/create',
        component: GoogleEventCreatePageComponent,
      },
      {
        path: 'contacts',
        component: GoogleContactsListPageComponent,
      },
      {
        path: 'contacts/create',
        component: GoogleContactCreatePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleRoutingModule {}
