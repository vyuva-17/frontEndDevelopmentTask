/***
 Modules and components which are belonged to this application with dependencies header HTTP Client API is to pass the request and response Based on the return value
***/
import {OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/***
 Injecting Can Activate Interface And its dependencies When Authgguard Class is initialized for root of the Application
***/
@Injectable({
  providedIn: 'root'
})
export class RestService implements OnInit {
  /***
    Http Client constructor to the ajax calls for request and response
  ***/
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  /***
   Employee Service API to fetch employee data to send task implementation component as per Task-5
  ***/
  getEmployee() {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
  }
}
