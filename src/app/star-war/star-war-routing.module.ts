import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarWarPeopleListPageComponent } from './star-war-people-list-page/star-war-people-list-page.component';
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
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWarRoutingModule { }
