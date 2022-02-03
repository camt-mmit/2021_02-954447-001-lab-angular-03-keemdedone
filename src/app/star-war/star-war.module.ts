import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarWarRoutingModule } from './star-war-routing.module';
import { StarWarComponent } from './star-war/star-war.component';
import { StarWarPeopleListComponent } from './star-war-people-list/star-war-people-list.component';
import { StarWarPeopleListPageComponent } from './star-war-people-list-page/star-war-people-list-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StarWarPersonViewComponent } from './star-war-person-view/star-war-person-view.component';
import { StarWarPersonViewPageComponent } from './star-war-person-view-page/star-war-person-view-page.component';
import { StarWarSpeciesListComponent } from './star-war-species-list/star-war-species-list.component';
import { StarWarSpeciesListPageComponent } from './star-war-species-list-page/star-war-species-list-page.component';
import { StarWarSpeciesViewComponent } from './star-war-species-view/star-war-species-view.component';
import { StarWarSpeciesViewPageComponent } from './star-war-species-view-page/star-war-species-view-page.component';


@NgModule({
  declarations: [
    StarWarComponent,
    StarWarPeopleListComponent,
    StarWarPeopleListPageComponent,
    StarWarPersonViewComponent,
    StarWarPersonViewPageComponent,
    StarWarSpeciesListComponent,
    StarWarSpeciesListPageComponent,
    StarWarSpeciesViewComponent,
    StarWarSpeciesViewPageComponent
  ],
  imports: [
    CommonModule,
    StarWarRoutingModule,
    ReactiveFormsModule,
  ]
})
export class StarWarModule { }
