/***
 import the services ts here as Rest Services and passed to constructor.
***/
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
/****
Component Directive to display the items that are associated with this component.
****/
@Component({
  selector: 'app-task-implementation',
  templateUrl: './task-implementation.component.html',
  styleUrls: ['./task-implementation.component.scss'],
})

export class TaskImplementationComponent {
  employeeData: any;
  spinner: any;
  /***
    Constructor will act as alias Rest Services for restServices.
  ***/
  constructor(private restService: RestService) {
    this.spinner = 1;
    /***
     getEmployee service is subscribed to receive a stream of an array and send to an component as per task-5
    ***/
    this.restService.getEmployee().subscribe((res: any) => {
      this.spinner = 0;
      console.log('data', res.data);
      this.employeeData = res.data;
    },
      (err) => { console.log('errors already caught... will not run'); }
    );
  }


}
