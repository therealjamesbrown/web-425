/*
============================================
; Title:  Exercise 5.3
; Author: Professor Krasso
; Modified by: James Brown
; Date:   8/5/2020
; Description: exercise 5.3 per instructions
;===========================================
*/

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators'
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '1234',
        title: 'Book 1',
        description: 'book 1 description',
        numOfPages: 23,
        authors: ['James Brown'] 
      },
      {
        isbn: '12345',
        title: 'Book 2',
        description: 'book 2 description',
        numOfPages: 24,
        authors: ['Shyan Allen'] 
      },
      {
        isbn: '111223',
        title: 'Book 3',
        description: 'book 3 description',
        numOfPages: 444,
        authors: ['Theo Brown'] 
      },
      {
        isbn: '139282',
        title: 'Book 4',
        description: 'book 4 description',
        numOfPages: 23222,
        authors: ['Avery Brown'] 
      },
      {
        isbn: '1232479',
        title: 'Book 5',
        description: 'book 5 description',
        numOfPages: 23999,
        authors: ['Fred Empkey'] 
      }
    ]
   }

   //returns full array of books
   getBooks(): Observable<IBook[]>{
     return of(this.books);
   }
   
   //loops all books and finds a specific one by isbn
   getBook(isbn: string): IBook{
     for(let book of this.books){
       if(book.isbn === isbn){
         return book;
       }
     }
   }
}
