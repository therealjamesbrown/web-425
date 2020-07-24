/*
============================================
; Title:  Exercise 3.2
; Author: Professor Krasso
; Modified by: James Brown
; Date:   7/24/2020
; Description: exercise 3.2 per instructions
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';




@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor() {
   this.composers = new Composer().getComposers();
   }

  ngOnInit(): void {
  }

}
