import {Component, Input, OnInit} from '@angular/core';
import {Medicine} from '../../models/medicine';

@Component({
  selector: 'app-medicine-item',
  templateUrl: './medicine-item.component.html',
  styleUrls: ['./medicine-item.component.css']
})
export class MedicineItemComponent implements OnInit {
  @Input() medicine: Medicine;

  constructor() {
  }

  ngOnInit(): void {
  }

}
