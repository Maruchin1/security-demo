import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ParentRoutingModule} from './parent-routing.module';
import {ParentComponent} from './parent.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    ParentRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ParentModule {
}
