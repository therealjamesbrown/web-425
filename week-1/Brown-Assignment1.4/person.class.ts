/*
============================================
; Title:  Exercise 1.4
; Author: Professor Krasso
; Modified by: James Brown
; Date:   7/10/2020
; Description: exercise 1.4 per instructions
;===========================================
*/

import { IPerson } from "./person.interface";

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("James", "Brown");

console.log(`My name is ${myName.firstName} ${myName.lastName}`);