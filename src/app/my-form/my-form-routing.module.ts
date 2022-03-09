import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { SimpleFormListPageComponent } from './simple-form-list-page/simple-form-list-page.component';
import { SimpleFormPageComponent } from './simple-form-page/simple-form-page.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

const routes: Routes = [
  {
    path:'',component: MyFormComponent,

      children: [
        {
          path:'',
          redirectTo: 'simple-form',
          pathMatch:'full'
        },
        {
          path:'simple-form',
          component: SimpleFormPageComponent,
        },
        {
          path:'simple-list',
          component: SimpleFormListPageComponent,
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFormRoutingModule { }
