/*
============================================
; Title:  Exercise 7.2
; Author: Professor Krasso
; Modified by: James Brown
; Date:   8/22/2020
; Description: exercise 7.2 per instructions
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;
  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = "GPA Calculator"; 
   }

  ngOnInit(): void {
  }

  signOut(){
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }
}
