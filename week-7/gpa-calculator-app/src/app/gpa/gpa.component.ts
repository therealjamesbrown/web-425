/*
============================================
; Title:  Exercise 7.2
; Author: Professor Krasso
; Modified by: James Brown
; Date:   8/22/2020
; Description: exercise 7.2 per instructions
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
