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
