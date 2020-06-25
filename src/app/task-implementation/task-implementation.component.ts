import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-task-implementation',
  templateUrl: './task-implementation.component.html',
  styleUrls: ['./task-implementation.component.scss'],
})
export class TaskImplementationComponent {
  employeeData:any;
  spinner:any;
  constructor(private http: HttpClient) {
    this.spinner=0;
    this.getpeople();
  }

getpeople(){
  this.spinner = 1;
    this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(res=> {
      localStorage.setItem('employeeData',JSON.stringify(res.data))
      this.spinner=0;
      this.employeeData=JSON.parse(localStorage.getItem('employeeData'))
       console.log('typeof',this.employeeData+res)
      console.log('data: ', this.employeeData);
    },
    (err)=>{ console.log('errors already caught... will not run');}
    );

    console.log('spinner',this.spinner);
  }

}
