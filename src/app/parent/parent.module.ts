import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ParentRoutingModule} from './parent-routing.module';
import {ParentComponent} from './parent.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {AddChildFormComponent} from './add-child-form/add-child-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {ChildItemComponent} from './child-item/child-item.component';
import {MatCardModule} from '@angular/material/card';
import {MedicineItemComponent} from './medicine-item/medicine-item.component';
import { AddMedicineFormComponent } from './add-medicine-form/add-medicine-form.component';
import { MedicineSearchResultComponent } from './medicine-search-result/medicine-search-result.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AssignMedicineToChildsComponent } from './assign-medicine-to-childs-form/assign-medicine-to-childs.component';


@NgModule({
  declarations: [
    ParentComponent,
    AddChildFormComponent,
    ChildItemComponent,
    MedicineItemComponent,
    AddMedicineFormComponent,
    AssignMedicineToChildsComponent,
    MedicineSearchResultComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatDividerModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class ParentModule {
}
