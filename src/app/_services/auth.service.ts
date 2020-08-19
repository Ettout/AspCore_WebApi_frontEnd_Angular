import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class AuthService {


urlbase='http://localhost:5000/auth/login';
urladduser='http://localhost:5000/user/add';


constructor(private http:HttpClient) { }

login(model:any){

  return this.http.post(this.urlbase,model).pipe(
    map((response:any)=>
     {
      const user = response;
      console.log("response");
      if(user)
       {
         localStorage.setItem('token',user.tokenn);
       }}))
}
adduser(model:any){

  return this.http.post(this.urladduser,model).pipe(
    map((response:any)=>
     {
      const user = response;
      console.log("response");
      if(user)
       {
         localStorage.setItem('name',user.username);
       }}))
}

}
