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
import { RegisterParentComponent } from './register-parent/register-parent.component';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginChildComponent } from './login-child/login-child.component';


@NgModule({
  declarations: [GuestComponent, LoginParentComponent, RegisterParentComponent, LoginChildComponent],
  imports: [
    CommonModule,
    GuestRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class GuestModule {
}
