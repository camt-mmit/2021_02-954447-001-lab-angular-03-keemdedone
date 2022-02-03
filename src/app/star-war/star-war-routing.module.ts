import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarWarPeopleListPageComponent } from './star-war-people-list-page/star-war-people-list-page.component';
import { StarWarPersonViewPageComponent } from './star-war-person-view-page/star-war-person-view-page.component';
import { StarWarComponent } from './star-war/star-war.component';

const routes: Routes = [
  {
    path: '', component:StarWarComponent, children: [
      {
        path: '',
        redirectTo: 'people',
        pathMatch:'full',
      },
      {
        path: 'people',
        component: StarWarPeopleListPageComponent,
      },
      {
        path:'people/:id',
        component: StarWarPersonViewPageComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWarRoutingModule { }
