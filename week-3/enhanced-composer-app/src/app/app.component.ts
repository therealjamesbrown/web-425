/*
============================================
; Title:  Exercise 3.2
; Author: Professor Krasso
; Modified by: James Brown
; Date:   7/24/2020
; Description: exercise 3.2 per instructions
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'composer-app';
  assignment: string = 'Exercise 3.2 - Passing Data to Routes Part 1';
}
