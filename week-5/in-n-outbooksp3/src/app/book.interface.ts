/*
============================================
; Title:  Exercise 5.4
; Author: Professor Krasso
; Modified by: James Brown
; Date:   8/5/2020
; Description: exercise 5.4 per instructions
;===========================================
*/


export interface IBook{
    isbn: string;
    title: string;
    description: string;
    numOfPages: number;
    authors: Array<string>;
}