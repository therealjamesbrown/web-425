  /*
============================================
; Title:  Bobs-Computer-Repair-Shop
; Author: James Brown
; Date:   9/26/2020
; Description: Angular APP for Bobs-Computer-Repair-Shop
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
