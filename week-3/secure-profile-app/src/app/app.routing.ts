/*
============================================
; Title:  Exercise 3.3
; Author: Professor Krasso
; Modified by: James Brown
; Date:   7/24/2020
; Description: exercise 3.3 per instructions
;===========================================
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';


export const AppRoutes: Routes = [
    {
        path: '', 
        component: SignInComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
]