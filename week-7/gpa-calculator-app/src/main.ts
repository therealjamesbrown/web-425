/*
============================================
; Title:  Exercise 7.2
; Author: Professor Krasso
; Modified by: James Brown
; Date:   8/22/2020
; Description: exercise 7.2 per instructions
;===========================================
*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
