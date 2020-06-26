/***
 Modules and components which are belonged to this application with dependencies header HTTP Interceptor API is to pass the request and response header and handle ajax error in one place  Based on the return value components will renders the data.
***/
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
@Injectable()
/***
 HTTP Interceptor Interface to implement task-2,3 it will handle the response and request header and http error in one place return the cached error to the corresponding request and response API
***/
export class RestService implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /***
    Set the logged in user credentials with request header for all request in one place. as per Task-2
    ***/
    const token = localStorage.getItem('userCredentials');
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    /***
    Set the error handle in one place to catch all the request and response error as Ajax error also and the cached error will throw to the corresponding request and response and display the cached message in console as per Task-3
    ***/
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err);
      })
    )
  }
}

