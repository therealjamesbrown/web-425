/*
============================================
; Title:  Exercise 4.4
; Author: Professor Krasso
; Modified by: James Brown
; Date:   7/29/2020
; Description: exercise 4.4 per instructions
;===========================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

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
    getComposers(): Observable<IComposer[]>{
        return of(this.composers);
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

//function that filters composers by using observable rxjs stuff
//first it establishes the pipe, filters the full name 
    filterComposers(name: string): Observable<IComposer[]>{
        return of(this.composers)
        .pipe(map(composers => composers
            .filter(composer => composer
                .fullName
                .toLowerCase()
                .indexOf(name) > -1)))
    }
}
