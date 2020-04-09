import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ParentRoutingModule} from './parent-routing.module';
import {ParentComponent} from './parent.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AddChildFormComponent } from './add-child-form/add-child-form.component';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { ChildItemComponent } from './child-item/child-item.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [ParentComponent, AddChildFormComponent, ChildItemComponent],
  imports: [
    CommonModule,
    ParentRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class ParentModule {
}
