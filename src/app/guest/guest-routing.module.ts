import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GuestComponent} from './guest.component';
import {LoginParentComponent} from './login-parent/login-parent.component';
import {RegisterParentComponent} from './register-parent/register-parent.component';

const routes: Routes = [
  {path: '', component: GuestComponent},
  {path: 'register-parent', component: RegisterParentComponent},
  {path: 'login-parent', component: LoginParentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule {
}
