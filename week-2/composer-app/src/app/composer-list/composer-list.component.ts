/*
============================================
; Title:  Exercise 2.4
; Author: Professor Krasso
; Modified by: James Brown
; Date:   3/7/2020
; Description: exercise 2.4 per instructions
;===========================================
*/
import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;


  constructor(fullName: string, genre: string){
    this.fullName = fullName;
    this.genre = genre;
  }
}



@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("James", "Brown"),
      new Composer("Shyan", "Allen"),
      new Composer("Fred", "Empkey"),
      new Composer("Theo", "Brown"),
      new Composer("Avery", "Brown"),
    ]
   }

  ngOnInit(): void {
  }

}
