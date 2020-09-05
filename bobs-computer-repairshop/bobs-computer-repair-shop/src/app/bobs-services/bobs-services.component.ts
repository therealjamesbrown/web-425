import { Component, OnInit } from '@angular/core';
import { ServiceList } from '../serviceList.interface';
import { ServiceListClass } from '../serviceList.class';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-bobs-services',
  templateUrl: './bobs-services.component.html',
  styleUrls: ['./bobs-services.component.scss']
})
export class BobsServicesComponent implements OnInit {
  
  /**
   * 
   * Variable Declarations
   * 
   * **/

  //variable for each entry sumbitted through the form
  serviceEntry = [];

  //list of services loaded from class
  services: Array<ServiceList> ;
  //services: Array<String> = ['Mango', 'Grapes', 'Strawberry', 'Oranges'];

  //form for receiving input from user
  serviceForm: FormGroup; 

  selectedCheckboxes = [];

  //array to hold services submitted
  selectedServices:any = []; 

  /**
   * Construtor that populates data from the service class and handles the form logic
   * 
   */
  //pass form builder into the constructor to build out form
  constructor(private fb: FormBuilder, public dialog: MatDialog) { 
  
   //pull in array of services from service class
   this.services = new ServiceListClass().getServices(); 
  //console.log(this.services);
   //create the form
    this.serviceForm = this.fb.group({
      services: this.addServiceSelectionControls(),
      parts: ['', Validators.required],
      laborhours: ['', Validators.required]
    });
  }
  


//Create array of items passed in
addServiceSelectionControls(){
    const arr = this.services.map(element =>{
      return this.fb.control(false);
    });
    return this.fb.array(arr);
  }

//convert the service to an array with actions
get serviceArray(){
  return <FormArray>this.serviceForm.get('services');
}

//get the values selected in the checkboxes and reate a new array
getSelectedFruitsValue(){
  this.selectedCheckboxes = [];
  this.serviceArray.controls.forEach((control, i) =>{
    if(control.value){
      this.selectedCheckboxes.push(this.services[i]);
    }
  });
}

  /**
   * set initial values
   */
  ngOnInit(): void {

  }

  get form(){
    return this.serviceForm.controls;
  }
  

  onSubmit(event){
    //console.log(this.form);
    //push the form entries into an array as objects
    this.selectedServices.push({
      parts: this.form.parts.value,
      laborhours: this.form.laborhours.value,
      services: this.selectedCheckboxes,
    })
    console.log(this.selectedServices)
    //alert("Form Submitted!")
    event.currentTarget.reset();
  }

  saveEntry(){
    console.log(this.selectedServices)
   
  }

}
