import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode'

const TOKEN_KEY = 'x-auth-token';

@Injectable({
  providedIn: 'root'
})
export class TokenstorageService {

  constructor() { }

  
  public setToken(token : string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }
  
  public getToken(): string | ' ' {
    let token = localStorage.getItem(TOKEN_KEY);
    if(token) {
      return token
    } else {
      return '';
    }
  }

  getName() {
    return localStorage.getItem('user');
  }
  
  getId() {
    return localStorage.getItem('id');
  }

  saveUserNameAndId(name, id) {
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    localStorage.setItem('user', name);
    localStorage.setItem('id', id);
  }
  
  async DecodeToken() {
    let decodedToken = await jwt_decode(localStorage.getItem(TOKEN_KEY),  {header: true })
    return decodedToken;
  }

  public logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('user');
    localStorage.removeItem('id');
  }
}
