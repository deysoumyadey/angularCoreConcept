import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { CustomersComponent } from './customers/customers.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, CustomersModule, SharedModule ],  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
