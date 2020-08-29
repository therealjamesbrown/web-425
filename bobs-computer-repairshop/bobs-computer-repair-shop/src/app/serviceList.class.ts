import { ServiceList } from './serviceList.interface';
export class ServiceListClass {
    services: Array<ServiceList>;

    constructor(){
        this.services = [
            {
                serviceName: "Password Rest",
                cost: 39.99
            },
            {
                serviceName: "Spyware Removal",
                cost: 99.99
            },
            {
                serviceName: "RAM Upgrade",
                cost: 129.99
            },
            {
                serviceName: "Software Installation",
                cost: 49.99
            },
            {
                serviceName: "Tune-up",
                cost: 89.99
            },
            {
                serviceName: "Keyboard Cleaning",
                cost: 45.00
            },
            {
                serviceName: "Disk Clean-up",
                cost: 149.99
            }
        ]
    }

    getServices(){
        return this.services;
        
    }

    getService(serviceName: string){
        for (let service of this.services){
            if(service.serviceName === serviceName){
                return service;
            }
        }
    }
}