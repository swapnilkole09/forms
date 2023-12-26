import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponentComponent } from './my-form/my-form.component';

const routes: Routes = [

  {
    path: 'update/address',
    component: MyComponentComponent,
  },
  {
    path: 'update/email',

    component: MyComponentComponent,
  },
  {
    path: 'update/mobile',
    component: MyComponentComponent,
  },
  // {
  //   path: 'update/mycomponent',
  //   component: MyComponentComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
