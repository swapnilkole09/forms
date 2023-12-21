import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { MobileFormComponent } from './mobile-form/mobile-form.component';

const routes: Routes = [

  {
    path:'update/address',
    component:AddressFormComponent
  },
  {
    path:'update/email',
    component:EmailFormComponent
  },
  {
    path:'update/mobile',
    component:MobileFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
