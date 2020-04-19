import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { LogoutComponent } from './logout.component';

const routes: Routes = [
  {path: 'parent', loadChildren: () => import('./parent/parent.module').then(m => m.ParentModule)},
  {path: 'child', loadChildren: () => import('./child/child.module').then(m => m.ChildModule)},
  {path: 'guest', loadChildren: () => import('./guest/guest.module').then(m => m.GuestModule)},
  {path: 'api/logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
