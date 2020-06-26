/***
 import the Task Implementation component and parse the data from parent component to child component .
***/
import { Component, OnInit, Input } from '@angular/core';
import { TaskImplementationComponent } from '../task-implementation/task-implementation.component';
/****
Component Directive to display the items that are associated with this component.
****/
@Component({
  selector: 'app-display-employee-child',
  templateUrl: './display-employee-child.component.html',
  styleUrls: ['./display-employee-child.component.scss']
})
export class DisplayEmployeeChildComponent implements OnInit {
  /***
    Input directive to parse the data send from parent component to child component as employee to render the parent component employee data.
   ***/
  @Input() employee: any = TaskImplementationComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
