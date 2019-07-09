import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit{
    filteredCustomers: any[] = [];
    custoemrsOrderTotal: number;
    currencyCode: string = 'USD';
    
    constructor() {}

    ngOnInit() {
    }
}