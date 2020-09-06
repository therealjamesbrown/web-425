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
   this.data = data; 
   }

  ngOnInit(): void {
  }

}
