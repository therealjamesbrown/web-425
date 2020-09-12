  /*
============================================
; Title:  Bobs-Computer-Repair-Shop
; Author: James Brown
; Date:   9/26/2020
; Description: Angular APP for Bobs-Computer-Repair-Shop
;===========================================
*/

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.scss']
})
export class InvoiceDialogComponent implements OnInit {


  laborhours;
  parts;
  calcTotal;
  data;

  constructor(private dialogRef: MatDialogRef<InvoiceDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
   this.laborhours = data.resultData[0].laborhours;
   this.parts = data.resultData[0].parts;
   this.calcTotal = data.calcTotal
   console.log(this.data)
   this.data = data; 
   }

  ngOnInit(): void {
  }

}
