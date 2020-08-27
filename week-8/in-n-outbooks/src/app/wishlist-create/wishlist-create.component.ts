/*
============================================
; Title:  Exercise 8.2
; Author: Professor Krasso
; Modified by: James Brown
; Date:   8/5/2020
; Description: exercise 8.2 per instructions
;===========================================
*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from "../wishlist-item.interface";

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})


export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();
  item: IWishlistItem;

  constructor() { 
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

  addItem(){
    this.addItemEmitter.emit({
      title: this.item.title,
      authors:this.item.authors
    })

    this.item = {} as IWishlistItem; 
  }

}
