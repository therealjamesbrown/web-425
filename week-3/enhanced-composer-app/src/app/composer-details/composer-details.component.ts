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
import { ActivatedRoute } from '@angular/router';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    //check if composer id has a value
    if (this.composerId){
      this.composer = new Composer().getComposer(this.composerId);
    }
   }

  ngOnInit(): void {
  }

}
