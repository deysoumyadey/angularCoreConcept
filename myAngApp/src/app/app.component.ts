import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-customers></app-customers>
  `
})
export class AppComponent implements OnInit{
  //title: string;
  
  constructor() {}

  ngOnInit(): void {
    //We will call a service to get the data
    //this.title = 'Hello World';
  }
}
