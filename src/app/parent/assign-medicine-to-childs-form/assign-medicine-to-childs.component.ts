import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Child} from 'src/app/models/child';
import {ParentService} from '../../services/parent.service';
import { Medicine } from 'src/app/models/medicine';

@Component({
  selector: 'app-dialog-assign-medicine-to-childs',
  templateUrl: './assign-medicine-to-childs.component.html',
  styleUrls: ['./assign-medicine-to-childs.component.css']
})
export class AssignMedicineToChildsComponent {
  checkedChildrensId: Number[] =[]

  constructor(
    private parentService: ParentService,
    private dialogRef: MatDialogRef<AssignMedicineToChildsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {childrens: Child[], medicine: Medicine})
     {     
      }

  checkChild(childId: Number){
    if(this.checkedChildrensId.indexOf(childId) > 0)
      this.checkedChildrensId.splice(this.checkedChildrensId.indexOf(childId),1);
    else
      this.checkedChildrensId.push(childId);
      }

  save(){
    this.checkedChildrensId.forEach(id => {
      let ch = this.data.childrens.find(ch => ch.childId === id)
      this.parentService.assignMedicineToChild(this.data.medicine, ch).then(() => {
        this.dialogRef.close();
      })
    })
  }
}
