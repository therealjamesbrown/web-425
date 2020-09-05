import { ServiceList } from './serviceList.interface';
export class ServiceListClass {
    services: Array<ServiceList>;

    constructor(){
        this.services = [
            {
                serviceName: "Password Reset",
                cost: 39.99,
                id: 1,
            },
            {
                serviceName: "Spyware Removal",
                cost: 99.99,
                id: 2
            },
            {
                serviceName: "RAM Upgrade",
                cost: 129.99,
                id: 3
            },
            {
                serviceName: "Software Installation",
                cost: 49.99,
                id: 4
            },
            {
                serviceName: "Tune-up",
                cost: 89.99,
                id: 5
            },
            {
                serviceName: "Keyboard Cleaning",
                cost: 45.00,
                id: 6
            },
            {
                serviceName: "Disk Clean-up",
                cost: 149.99,
                id: 7
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