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
