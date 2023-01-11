import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  baseUrl:string="https://jsonplaceholder.cypress.io/"

  listUsers(){
    this.http.get(this.baseUrl+"users")
  }
}
