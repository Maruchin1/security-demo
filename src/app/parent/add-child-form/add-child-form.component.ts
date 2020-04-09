import {Component, Input, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Child} from 'src/app/models/child';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {ParentService} from '../../services/parent.service';

@Component({
  selector: 'app-dialog-add-child',
  templateUrl: './add-child-form.component.html',
  styleUrls: ['./add-child-form.component.css']
})
export class AddChildFormComponent {
  form = this.fb.group({
    name: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private parentService: ParentService,
    private dialogRef: MatDialogRef<AddChildFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Child) {
  }

  save() {
    const data = this.form.get('name').value;
    this.parentService.addChild(data).then(
      value => {
        this.dialogRef.close();
      }
    );
  }
}
