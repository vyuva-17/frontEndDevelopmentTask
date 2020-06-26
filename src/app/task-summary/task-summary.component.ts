import { Component, OnInit } from '@angular/core';
/****
Component Directive to display the items that are assosiated with this component
****/
@Component({
  selector: 'app-task-summary',
  templateUrl: './task-summary.component.html',
})
/***
 class will act as interface for ONInit API
 ***/
export class TaskSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
