import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChildRoutingModule} from './child-routing.module';
import {ChildComponent} from './child.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [ChildComponent],
  imports: [
    CommonModule,
    ChildRoutingModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class ChildModule {
}
