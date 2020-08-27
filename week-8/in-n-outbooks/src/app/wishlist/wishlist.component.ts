/*
============================================
; Title:  Exercise 8.2
; Author: Professor Krasso
; Modified by: James Brown
; Date:   8/5/2020
; Description: exercise 8.2 per instructions
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishlistItem){
    this.items.push(item); 
  }

}
