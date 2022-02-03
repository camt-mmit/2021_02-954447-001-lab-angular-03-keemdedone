import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarWarRoutingModule } from './star-war-routing.module';
import { StarWarComponent } from './star-war/star-war.component';
import { StarWarPeopleListComponent } from './star-war-people-list/star-war-people-list.component';
import { StarWarPeopleListPageComponent } from './star-war-people-list-page/star-war-people-list-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StarWarPersonViewComponent } from './star-war-person-view/star-war-person-view.component';
import { StarWarPersonViewPageComponent } from './star-war-person-view-page/star-war-person-view-page.component';


@NgModule({
  declarations: [
    StarWarComponent,
    StarWarPeopleListComponent,
    StarWarPeopleListPageComponent,
    StarWarPersonViewComponent,
    StarWarPersonViewPageComponent
  ],
  imports: [
    CommonModule,
    StarWarRoutingModule,
    ReactiveFormsModule,
  ]
})
export class StarWarModule { }
