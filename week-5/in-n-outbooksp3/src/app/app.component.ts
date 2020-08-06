/*
============================================
; Title:  Exercise 5.4
; Author: Professor Krasso
; Modified by: James Brown
; Date:   8/5/2020
; Description: exercise 5.4 per instructions
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment: string;
  constructor(){
    this.assignment = 'Excercise 5.4 - Dialogs'
  }
  title = 'in-n-outbooksp1';
}
