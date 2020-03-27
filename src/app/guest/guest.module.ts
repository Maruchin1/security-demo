import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GuestRoutingModule} from './guest-routing.module';
import {GuestComponent} from './guest.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {LoginParentComponent} from './login-parent/login-parent.component';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [GuestComponent, LoginParentComponent],
  imports: [
    CommonModule,
    GuestRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRippleModule,
    MatButtonModule
  ]
})
export class GuestModule {
}
