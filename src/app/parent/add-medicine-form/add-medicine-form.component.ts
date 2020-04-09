import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Medicine} from '../../models/medicine';
import {ParentService} from '../../services/parent.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-medicine-form',
  templateUrl: './add-medicine-form.component.html',
  styleUrls: ['./add-medicine-form.component.css']
})
export class AddMedicineFormComponent implements OnInit {
  form = this.fb.group({
    name: ['', Validators.required],
    unit: ['', Validators.required],
    expireDate: [null, Validators.required],
    packageSize: [null, Validators.required],
    currState: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private parentService: ParentService,
    private dialogRef: MatDialogRef<AddMedicineFormComponent>
  ) {
  }

  save() {
    const data = this.getNewMedicineData();
    this.parentService.addMedicine(data).subscribe(
      value => {
        this.dialogRef.close();
      }
    );
  }

  ngOnInit(): void {
  }

  private getNewMedicineData(): Medicine {
    return new Medicine(
      0,
      this.form.get('name').value,
      this.form.get('unit').value,
      this.form.get('expireDate').value,
      this.form.get('packageSize').value,
      this.form.get('currState').value,
    );
  }
}
