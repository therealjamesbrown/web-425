/*
============================================
; Title:  Exercise 8.2
; Author: Professor Krasso
; Modified by: James Brown
; Date:   8/25/2020
; Description: exercise 8.2 per instructions
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
    this.assignment = 'Welcome to In-N-Out-Books'
  }
  title = 'Welcome to In-N-Out-Books';
}
