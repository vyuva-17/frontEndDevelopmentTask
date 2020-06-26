import { Component, OnInit } from '@angular/core';

/****
  Component Directive to display the items that are associated with this component
****/
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
/***
 class will act as interface for ONInit API
 ***/
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
