/*
============================================
; Title:  Exercise 6.4
; Author: Professor Krasso
; Modified by: James Brown
; Date:   8/15/2020
; Description: exercise 6.4 per instructions
;===========================================
*/


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;
  constructor() {
    this.assignment = "Exercise 6.4 - Input Properties"
   }

  ngOnInit(): void {
  }

}
