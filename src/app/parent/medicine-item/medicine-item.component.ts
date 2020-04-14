import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Medicine} from '../../models/medicine';
import {ParentService} from '../../services/parent.service';
import { AssignMedicineToChildsComponent } from '../assign-medicine-to-childs-form/assign-medicine-to-childs.component';
import { MatDialog } from '@angular/material/dialog';
import { Child } from 'src/app/models/child';

@Component({
  selector: 'app-medicine-item',
  templateUrl: './medicine-item.component.html',
  styleUrls: ['./medicine-item.component.css']
})
export class MedicineItemComponent implements OnInit {
  @Input() medicine: Medicine;
  @Input() childrens: Child[];
  @Output() removed = new EventEmitter();

  constructor(
    private parentService: ParentService,  private dialog: MatDialog
  ) {
  }

  assign() {
    this.dialog.open(AssignMedicineToChildsComponent, {
      width: '400px',
      data: {
        medicine: this.medicine,
        childrens: this.childrens
      }
    });
    }

  remove() {
    this.parentService.removeMedicine(this.medicine.medicineId)
      .then(value => {
        this.removed.emit();
      });
  }

  ngOnInit(): void {
  }

}
