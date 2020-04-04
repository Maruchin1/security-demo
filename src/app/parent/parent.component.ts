import {Component, OnInit} from '@angular/core';
import { Parent } from '../models/parent';
import { Child } from '../models/child';
import { Medicine } from '../models/medicine';
import { ParentService } from '../services/parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parent: Parent
  childs: Child[] = []
  medicines: Medicine[] = []

  constructor(private parentService: ParentService) {
  }

  ngOnInit(): void {
    this.parentService.getParentData().then( p => this.parent = p)
    .catch(err => console.error(err))

    this.parentService.getParentChilds().then( ch => this.childs = ch)
    this.parentService.getParentMedicines().then( m => this.medicines = m)
  }

  addMedicine(){
    //toDO: przekierowanie do formularza dodawania leku
  }

  deleteMedicine(medicineId: number){
    this.parentService.removeMedicine(medicineId).then(() => {
      let i = this.medicines.findIndex(c => c.medicineId === medicineId)
      this.medicines.splice(i,1);
    }).catch(err => { console.log(err)
      alert("Nie można usunąć leku! (Może jest przypisany do dziecka).")
    });
    }

    addChild(){
      //toDO: przekierowanie do formularza dodawania dzecka
    }

    addMedicinesToChild(childId: number){
      //toDO: przekierowanie do widoku z przypisywaniem leków
    }

  deleteChild(childId: number){
    this.parentService.removeChild(childId).then(() => {
      let i = this.childs.findIndex(c => c.childId === childId)
      this.childs.splice(i,1);
    }).catch(err => {
      alert("Nie można usunąć dziecka!")
    })
  }

}
