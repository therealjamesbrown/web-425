/*
============================================
; Title:  Exercise 6.4
; Author: Professor Krasso
; Modified by: James Brown
; Date:   8/15/2020
; Description: exercise 6.4 per instructions
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
