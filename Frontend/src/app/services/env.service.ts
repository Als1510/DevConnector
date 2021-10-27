import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  
  API_URL = 'https://devconnectorbackend.herokuapp.com/api';
  // API_URL = 'http://localhost:5000/api';

  constructor() { }
}
