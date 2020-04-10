import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Medicine} from '../../models/medicine';

@Component({
  selector: 'app-medicine-search-result',
  templateUrl: './medicine-search-result.component.html',
  styleUrls: ['./medicine-search-result.component.css']
})
export class MedicineSearchResultComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Medicine[],
    private dialogRef: MatDialogRef<MedicineSearchResultComponent>
  ) {
  }

  ngOnInit(): void {
  }

}
