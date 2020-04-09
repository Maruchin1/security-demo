import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChildRoutingModule} from './child-routing.module';
import {ChildComponent} from './child.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MedicineItemComponent} from './medicine-item/medicine-item.component';


@NgModule({
  declarations: [ChildComponent, MedicineItemComponent],
  exports: [
    MedicineItemComponent
  ],
  imports: [
    CommonModule,
    ChildRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class ChildModule {
}
