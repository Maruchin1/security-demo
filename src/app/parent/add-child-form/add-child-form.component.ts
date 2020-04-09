import {Component, Input, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Child } from 'src/app/models/child';

@Component({
  selector: 'dialog-add-child',
  templateUrl: 'add-child-form.component.html',
})
export class AddChildFormComponent {
  childName: string = ''

  constructor(
    public dialogRef: MatDialogRef<AddChildFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Child) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
