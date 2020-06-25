import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  constructor(public router: Router) { }
  canActivate(): boolean {
    if (localStorage.getItem('userCredentials')=== null) {
      this.router.navigate(['app-home']);
      return false;
    }
    return true;
  }
}
