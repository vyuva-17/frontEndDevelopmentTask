import { Component, OnInit } from '@angular/core';
/****
Component Directive to display the items that are associated with this component
****/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
/***
 class will act as interface for ONInit API
 ***/
export class AppComponent implements OnInit {
  title = 'frontEndDevelopmentTaskTemp';
  constructor() { }
  /***
   IT will stored the static user credential Json in web storage API(Local Storage) and serve it over application which will be assigned  for authguard and to set in service request headers as per Task-1
  ***/
  credentials: any;
  ngOnInit(): void {
    this.credentials = [{ "userId": '1', "name": 'Yuvanesh' }];
    localStorage.setItem('userCredentials', JSON.stringify(this.credentials));
  }
}
