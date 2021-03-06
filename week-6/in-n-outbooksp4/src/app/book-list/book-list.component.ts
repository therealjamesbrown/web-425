/*
============================================
; Title:  Exercise 5.4
; Author: Professor Krasso
; Modified by: James Brown
; Date:   8/5/2020
; Description: exercise 5.4 per instructions
;===========================================
*/


import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  constructor(private bookService: BooksService, private dialog: MatDialog) { 
    this.books = this.bookService.getBooks();
  }

  showBookDetails(isbn: string){
    this.book = this.bookService.getBook(isbn);
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {book: this.book},
      disableClose: true,
      width: '800px'
    }); 

    dialogRef.afterClosed().subscribe(result => { if (result === 'confirm'){
      this.book = null
    }})
    console.log(this.book);

  }

  ngOnInit(): void {
  }

}
