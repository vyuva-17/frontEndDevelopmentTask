/***
 Modules and components which are belonged to this application with dependencies header Can Activate API is to route Based on the return value
 ***/
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
/***
 Injecting Can Activate Interface And its dependencies When Authgguard Class is initialized for root of the Application
***/
@Injectable({
  providedIn: 'root'
})
/***
 Can Activate API Interface to Complete Task-1
***/
export class AuthGaurdService implements CanActivate{

  constructor(public router: Router) { }
  /***
   canActivate Method will return boolean based on User Credentials Key stored in local Storage Condition to check the navigation is doing by the authorized User or not if he is authorized user then it will allow the navigation for pages.
  ***/
  canActivate(): boolean {
    if (localStorage.getItem('userCredentials')=== null) {
      this.router.navigate(['app-home']);
      return false;
    }
    return true;
  }
}
