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
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //variable declaration
  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = ["A","A-","B+","B","B-","C+","C","C-","D+","D","D-","F"];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;

  constructor() {
    this.transcriptEntry = {} as ITranscript; 
   }

  ngOnInit(): void {
  }

  saveEntry(){
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript; 
  }

  calculateResults(){
    //init gpa to 0
    let gpa: number = 0;

    //use a for loop to loop through array of grades to determine a gpa for the entry
    for (let selectedGrade of this.transcriptEntries){
      switch(selectedGrade.grade){
        case "A": 
          gpa += 4.0;
          break;
        case "A-":
          gpa += 3.65;
          break;
        case "B+":
          gpa += 3.30;
          break;
        case "B":
          gpa += 3.00;
          break;
        case "B-":
          gpa += 2.7;
          break;
        case "C+": 
          gpa += 2.3;
          break;
        case "C":
          gpa += 2.00;
          break;
        case "C-":
          gpa += 1.7;
          break;
        case "D+":
          gpa += 1.3;
          break;
        case "D":
          gpa += 1.0;
          break;
        case "D-":
          gpa += 0.7;
          break;
        case "F":
          gpa += 0.0;
          break;
      }
    }
    //calculate the gpa toal
    this.gpaTotal = gpa / this.transcriptEntries.length; 
  }

  clearEntries(){
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

}
