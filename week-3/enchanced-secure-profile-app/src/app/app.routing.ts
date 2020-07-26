/*
============================================
; Title:  Exercise 3.4
; Author: Professor Krasso
; Modified by: James Brown
; Date:   7/24/2020
; Description: exercise 3.4 per instructions
;===========================================
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';


export const AppRoutes: Routes = [
    {
        path: '', 
        component: SignInComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [SignInGuard]
    }
]