import { Component, OnInit, Input } from '@angular/core';
import { TaskImplementationComponent } from '../task-implementation/task-implementation.component';

@Component({
  selector: 'app-display-employee-child',
  templateUrl: './display-employee-child.component.html',
  styleUrls: ['./display-employee-child.component.scss']
})
export class DisplayEmployeeChildComponent implements OnInit {
@Input() employee:TaskImplementationComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
