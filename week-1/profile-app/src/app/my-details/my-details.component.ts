/*
============================================
; Title:  Exercise 1.5
; Author: Professor Krasso
; Modified by: James Brown
; Date:   3/7/2020
; Description: exercise 1.5 per instructions
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
  fullName = 'James Brown';
  favoriteFood = 'Pizza';
  favoriteColor = 'Black';
  constructor() { }

  ngOnInit(): void {
  }

} 
