import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit{
    private _customers: ICustomer[] = [];
    @Input() get customers(): ICustomer[] {
        return this._customers;
    }

    set customers(value: ICustomer[]) {
        if(value){
            this.filteredCustomers = this._customers = value;
            this.calculateOrders();
        }
    }

    //@Input() customers: any[];
    filteredCustomers: ICustomer[] = [];
    custoemrsOrderTotal: number;
    currencyCode: string = 'INR';

    constructor() {}

    ngOnInit() {
        
    }

    /*ngOnChanges(changes: SimpleChange){

    }*/

    calculateOrders(){
        this.custoemrsOrderTotal = 0;
        this.filteredCustomers.forEach((cust: ICustomer) => {
            this.custoemrsOrderTotal += cust.orderTotal;
        })
    }

    sort(prop: string){
        //A sorter service will handle the string
    }
}