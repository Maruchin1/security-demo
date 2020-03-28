import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GuestComponent} from './guest.component';
import {LoginParentComponent} from './login-parent/login-parent.component';
import {RegisterParentComponent} from './register-parent/register-parent.component';
import {LoginChildComponent} from './login-child/login-child.component';

const routes: Routes = [
  {path: '', component: GuestComponent},
  {path: 'register-parent', component: RegisterParentComponent},
  {path: 'login-parent', component: LoginParentComponent},
  {path: 'login-child', component: LoginChildComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule {
}
