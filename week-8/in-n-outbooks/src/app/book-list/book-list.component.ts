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
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Array<IBook> = [];
  book: IBook;

  constructor(private bookService: BooksService, private dialog: MatDialog) { 

    this.bookService.getBooks().subscribe(res => {
      console.log(res);
      for(let key in res){
        if(res.hasOwnProperty(key)){
          let authors = [];
          if (res[key].details.authors){
            authors = res[key].details.authors.map(function(author){
              return author.name;
            })
          }
          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subscribe : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    })

    this.bookService.getBooks().subscribe();
  }

  showBookDetails(isbn: string){
    this.book = this.books.find(book => book.isbn === isbn);
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
