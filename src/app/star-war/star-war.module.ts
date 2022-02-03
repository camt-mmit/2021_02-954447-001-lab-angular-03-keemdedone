import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarWarRoutingModule } from './star-war-routing.module';
import { StarWarComponent } from './star-war/star-war.component';
import { StarWarPeopleListComponent } from './star-war-people-list/star-war-people-list.component';
import { StarWarPeopleListPageComponent } from './star-war-people-list-page/star-war-people-list-page.component';


@NgModule({
  declarations: [
    StarWarComponent,
    StarWarPeopleListComponent,
    StarWarPeopleListPageComponent
  ],
  imports: [
    CommonModule,
    StarWarRoutingModule
  ]
})
export class StarWarModule { }
