import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Medicine} from '../../models/medicine';
import {ParentService} from '../../services/parent.service';

@Component({
  selector: 'app-medicine-item',
  templateUrl: './medicine-item.component.html',
  styleUrls: ['./medicine-item.component.css']
})
export class MedicineItemComponent implements OnInit {
  @Input() medicine: Medicine;
  @Output() removed = new EventEmitter();

  constructor(
    private parentService: ParentService
  ) {
  }

  assign() {

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
