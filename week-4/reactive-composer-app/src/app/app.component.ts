/*
============================================
; Title:  Exercise 4.3
; Author: Professor Krasso
; Modified by: James Brown
; Date:   7/29/2020
; Description: exercise 4.2 per instructions
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
  assignment: string = 'Exercise 4.3 - Handling Events with Observables';
}
