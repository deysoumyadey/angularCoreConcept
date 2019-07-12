import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit{
    filteredCustomers: ICustomer[] = [];
    custoemrsOrderTotal: number;
    currencyCode: string = 'USD';

    constructor() {}

    ngOnInit() {
    }
}