import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Child} from '../../models/child';
import {ParentService} from '../../services/parent.service';
import { ChildMedicine } from 'src/app/models/child-medicine';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {
  @Input() child: Child;
  @Output() removed = new EventEmitter();
  medicines: ChildMedicine[]

  constructor(
    private parentService: ParentService
  ) {
  }

  remove() {
    this.parentService.removeChild(this.child.childId)
      .then(value => {
        this.removed.emit();
      });
  }

  removeAssignedMedicine(chmedId: number){
    this.parentService.removeAssignedMedicine(chmedId)
    .then(() => {
      let i = this.medicines.findIndex(m => m.childMedicineId == chmedId)
      this.medicines.splice(i,1)
    })
  }

  ngOnInit(): void {
    this.parentService.getMedicinesAssignedToChild(this.child.childId)
    .then(mch => this.medicines=mch)
  }

}
