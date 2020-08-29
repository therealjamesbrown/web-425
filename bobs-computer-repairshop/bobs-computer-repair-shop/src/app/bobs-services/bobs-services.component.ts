import { Component, OnInit } from '@angular/core';
import { ServiceList } from '../serviceList.interface';
import { ServiceListClass } from '../serviceList.class';

@Component({
  selector: 'app-bobs-services',
  templateUrl: './bobs-services.component.html',
  styleUrls: ['./bobs-services.component.scss']
})
export class BobsServicesComponent implements OnInit {

  services: Array<ServiceList>;

  constructor() { 
    this.services = new ServiceListClass().getServices();
    console.log(JSON.stringify(this.services));
  }

  ngOnInit(): void {
  }

}
