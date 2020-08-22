/*
============================================
; Title:  Exercise 7.3
; Author: Professor Krasso
; Modified by: James Brown
; Date:   8/18/2020
; Description: exercise 7.3 per instructions
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;


  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signInService: SignInService) { 
    //console.log(this.cookieService.get('session_user'));
  }

  ngOnInit(): void {
    this.signinForm = this.fb.group({ 
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    });
    console.log(this.signinForm);
  }

  get(){
    return this.signinForm.controls;
  }

  onSubmit(){
    const formValues = this.signinForm.value; 
    const studentId = parseInt(formValues.studentId); 

    if (this.signInService.validate(studentId)){
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'The student ID you entered is invalid. Please try again.';
      console.log(this.signinForm);
    }
  }

}
