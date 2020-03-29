import {Component, OnInit} from '@angular/core';
import { Parent } from '../models/parent';
import { Child } from '../models/child';
import { Medicine } from '../models/medicine';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parent: Parent
  childs: Child[] = []
  medicines: Medicine[] = []

  constructor() {
  }

  ngOnInit(): void {
    //toDO: get some data from backend, below mocked
    this.parent = {parentId: 11, name: "Antoni", email: "a@b.cd"}
    this.childs.push({childId: 1, name: "Adaś", connectionKey: "UZUMYMW"})
    this.childs.push({childId: 2, name: "Małgosia", connectionKey: "AEZAKMI"})
    this.childs.push({childId: 3, name: "Janek", connectionKey: "44EERQQS"})
    this.medicines.push({  medicineId: 1,
      name: "alfa1",
      unit: "100j",
      expireDate: new Date("18-10-2020"),
      packageSize: 200,
      currState: 1})
      this.medicines.push({  medicineId: 2,
        name: "omega 7 Premium super fast",
        unit: "100j",
        expireDate: new Date("18-05-2020"),
        packageSize: 100,
        currState: 1})  }

  addMedicine(){
    //toDO: przekierowanie do formularza dodawania leku
  }

  deleteMedicine(medicineId: number){
    let i = this.medicines.findIndex(c => c.medicineId === medicineId)
    this.medicines.splice(i,1);
    //toDO: usunac z bazy
  }

  addChild(){
    //toDO: przekierowanie do formularza dodawania dzecka
  }

  deleteChild(childId: number){
    let i = this.childs.findIndex(c => c.childId === childId)
    this.childs.splice(i,1);
    //toDO: usunac z bazy
  }

}
