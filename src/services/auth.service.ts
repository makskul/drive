import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  static getServiceAuth() {
    localStorage.getItem('auth')
  }

  setLoginData() {
    localStorage.setItem('auth', '1')
  }
}
