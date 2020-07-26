/*
============================================
; Title:  Exercise 3.4
; Author: Professor Krasso
; Modified by: James Brown
; Date:   7/24/2020
; Description: exercise 3.4 per instructions
;===========================================
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {


  constructor(private router: Router) {
    
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //define a variable for seeing if user is logged in
    let isLoggedIn = next.queryParams.isLoggedIn;

    //check to see if user has logged in.
    if (isLoggedIn){
      return true; 
    } else {
      this.router.navigate(['/']);
      return false; 
    }
  }
}
