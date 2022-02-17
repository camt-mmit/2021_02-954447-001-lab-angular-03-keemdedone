import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',redirectTo:'example',pathMatch:'full'
  },
  {
    path:'example',loadChildren: () => import('./example/example.module').then((m)=>m.ExampleModule)
  },
  {
    path:'simple-form',loadChildren: () => import('./my-form/my-form.module').then((m)=>m.MyFormModule)
  },
  {
    path:'star-war',loadChildren: () => import('./star-war/star-war.module').then((m) => m.StarWarModule)
  },
  {
    path:'google',loadChildren: () => import('./google/google.module').then((m) => m.GoogleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
