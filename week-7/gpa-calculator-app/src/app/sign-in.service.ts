/*
============================================
; Title:  Exercise 7.3
; Author: Professor Krasso
; Modified by: James Brown
; Date:   8/18/2020
; Description: exercise 7.3 per instructions
;===========================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() { 
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number){
      return this.studentIds.some(id => id === studentId);
  }
}
