import {Component, OnInit} from '@angular/core';
import {Parent} from '../models/parent';
import {Child} from '../models/child';
import {Medicine} from '../models/medicine';
import {ParentService} from '../services/parent.service';
import {AddChildFormComponent} from './add-child-form/add-child-form.component';
import {MatDialog} from '@angular/material/dialog';
import {AddMedicineFormComponent} from './add-medicine-form/add-medicine-form.component';
import {FormControl} from '@angular/forms';
import {MedicineSearchResultComponent} from './medicine-search-result/medicine-search-result.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parent: Parent;
  childrens: Child[] = [];
  medicines: Medicine[] = [];
  searchMedicineControl = new FormControl('');

  constructor(private parentService: ParentService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.parentService.getParentData().then(p => this.parent = p)
      .catch(err => console.error(err));

    this.refreshData();
  }

  refreshData() {
    this.parentService.getParentChilds().then(ch => this.childrens = ch);
    this.parentService.getParentMedicines().then(m => this.medicines = m);
  }

  addMedicine() {
    const dialogRef = this.dialog.open(AddMedicineFormComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(
      value => this.refreshData()
    );
  }

  searchMedicine() {
    const medicineName = this.searchMedicineControl.value;
    if (medicineName) {
      this.parentService.searchMedicine(medicineName).subscribe(
        value => {
          const dialogRef = this.dialog.open(MedicineSearchResultComponent, {
            width: '400px',
            data: value
          });
        }
      );
    }
  }

  deleteMedicine(medicineId: number) {
    this.parentService.removeMedicine(medicineId).then(() => {
      const i = this.medicines.findIndex(c => c.medicineId === medicineId);
      this.medicines.splice(i, 1);
    }).catch(err => {
      console.log(err);
      alert('Nie można usunąć leku! (Może jest przypisany do dziecka).');
    });
  }

  addChild() {
    const dialogRef = this.dialog.open(AddChildFormComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(
      value => this.refreshData()
    );
  }

  deleteChild(childId: number) {
    this.parentService.removeChild(childId).then(() => {
      const i = this.childrens.findIndex(c => c.childId === childId);
      this.childrens.splice(i, 1);
    }).catch(err => {
      alert('Nie można usunąć dziecka!');
    });
  }

}
