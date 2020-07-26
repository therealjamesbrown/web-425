/*
============================================
; Title:  Exercise 3.4
; Author: Professor Krasso
; Modified by: James Brown
; Date:   7/24/2020
; Description: exercise 3.4 per instructions
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) { }
 isLoggedIn = false;

  ngOnInit(): void {
  }

  signin(){
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn},skipLocationChange: true 
  });
  }

}
