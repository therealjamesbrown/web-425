/*
============================================
; Title:  Exercise 4.2
; Author: Professor Krasso
; Modified by: James Brown
; Date:   7/29/2020
; Description: exercise 4.2 per instructions
;===========================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;
  
    constructor(){
        this.composers = [
            {
                composerId: 100, fullName: "James Brown", genre: "Classical"
            },
            {
                composerId: 101, fullName: "Shyan Allen", genre: "Pop"
            },
            {
                composerId: 102, fullName: "Fred Empkey", genre: "Club"
            },
            {
                composerId: 103, fullName: "Theo Brown", genre: "Rock"
            },
            {
                composerId: 104, fullName: "Avery Brown", genre: "Hip Hop"
            }
          ]
    }
//returns composers array of objects
    getComposers(){
        return this.composers;
    }
//function that takes a composer ID and checks to see if it is in the array. if it is, the composer details
//are returned.
    getComposer(composerId: number){
        for (let composer of this.composers){
            if (composer.composerId === composerId){
                return composer;
            }
        }
    }
}
