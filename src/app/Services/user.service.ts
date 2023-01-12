import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  baseUrl:string="https://jsonplaceholder.cypress.io/"

  listUsers(){
    return this.http.get(this.baseUrl + "users")
  }

  viewUser(id: string){
    return this.http.get(this.baseUrl + "users/" + id)
  }

  createUser(userObj:any){
    return this.http.post(this.baseUrl + "users", userObj)
  }
}
