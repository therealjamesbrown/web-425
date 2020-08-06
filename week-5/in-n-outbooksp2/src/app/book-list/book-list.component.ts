/*
============================================
; Title:  Exercise 5.3
; Author: Professor Krasso
; Modified by: James Brown
; Date:   8/5/2020
; Description: exercise 5.3 per instructions
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  constructor(private bookService: BooksService) { 
    this.books = this.bookService.getBooks();
  }

  showBookDetails(isbn: string){
    this.book = this.bookService.getBook(isbn);
    console.log(this.book);

  }

  ngOnInit(): void {
  }

}
