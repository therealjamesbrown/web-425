/*
============================================
; Title:  Exercise 4.4
; Author: Professor Krasso
; Modified by: James Brown
; Date:   7/29/2020
; Description: exercise 4.4 per instructions
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service'; 
import { FormControl, Form } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'; 
import { Observable } from 'rxjs';




@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  title: string = 'Exercise 4.4 - Async Pipe';
  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl(''); 

  constructor(private composerService: ComposerService) {
   this.composers = this.composerService.getComposers();

   this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
   }

  ngOnInit(): void {
  }

  filterComposers(name: string){
    this.composers = this.composerService.filterComposers(name);
  }

}
