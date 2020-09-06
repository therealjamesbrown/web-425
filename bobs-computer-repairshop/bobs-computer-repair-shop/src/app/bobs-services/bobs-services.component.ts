import { Component, OnInit } from '@angular/core';
import { ServiceList } from '../serviceList.interface';
import { ServiceListClass } from '../serviceList.class';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';

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

  //list of services loaded from class
  services: Array<ServiceList> ;

  //form for receiving input from user
  serviceForm: FormGroup; 

  //array to hold selected checkboxes
  selectedCheckboxes:any = [];

  //array to hold services & parts/labor submitted
  selectedServices:any = []; 

  total:any; 

  /**
   * Construtor that populates data from the service class and handles the form logic
   * 
   */
  //pass form builder into the constructor to build out form
  constructor(private fb: FormBuilder, public dialog: MatDialog) { 
  
   //pull in array of services from service class
   this.services = new ServiceListClass().getServices(); 

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
      //set the checkboxes to unselected by default
      return this.fb.control(false);
    });
    return this.fb.array(arr);
  }

//convert the service to an array with actions
get serviceArray(){
  return <FormArray>this.serviceForm.get('services');
}

//get the values selected in the checkboxes and reate a new array
getSelectedServiceValue(){
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

  //form controls
  get form(){
    return this.serviceForm.controls;
  }
  

  //function that is executed when form is submitted, which pushes user entries into an array
  onSubmit(event){
    //push the form entries into an array as objects
    this.selectedServices.push({
      parts: this.form.parts.value,
      laborhours: this.form.laborhours.value,
      selServices: this.selectedCheckboxes
    })

    //reset the form
    event.currentTarget.reset();
  }

  saveEntry(){
   
  }

  calcTotal(selectedServices){
    let total = 0;
    let servicesTotal = 0;
    let partsAndLaborTotal = 0;

    /**
     * Logic for calculating the selected checkbox services
     */
    //outer loop to iterate over the selected services array
    for(let i of selectedServices){
      //inner looper to loop over the selServ
      for ( let j of i.selServices){
        servicesTotal += j.cost;
      }
    }


  /**
   * Logic for calculating Parts and Labor Total
   */
    for(let i of selectedServices){
      partsAndLaborTotal = i.laborhours * 50;
    }
    total = servicesTotal + partsAndLaborTotal;
    return total.toFixed(2);
  }

openDialog() {
  console.log(`Dialog clicked: 
  ${JSON.stringify(this.selectedServices)}`);
    const dialogRef = this.dialog.open(InvoiceDialogComponent,
      {data: {
        resultData: this.selectedServices,
        calcTotal: this.calcTotal(this.selectedServices)
      },
        disableClose: false,
        width: "600px" });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    if (result === true){
      alert("Invoice Submitted!");
      this.selectedServices = [];
      console.log(this.selectedServices);

    } else{
      alert("Invoice cancelled!");
      this.selectedServices = [];
      console.log(this.selectedServices);
    }
  });
}

}