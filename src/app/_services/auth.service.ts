import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators"
import { RegisterModel } from '../models/register-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


urlbase='http://localhost:5000/auth/login';
urladduser='http://localhost:5000/auth/register';


constructor(private http:HttpClient) { }

login(model:any){

  return this.http.post(this.urlbase,model).pipe(
    map((response:any)=>
     {
      const jsonobject = response;
      console.log("response");
      if(jsonobject)
       {
         localStorage.setItem('token',jsonobject.token);
       }}))
     }

     register(reg:RegisterModel): Observable<RegisterModel>{

      return this.http.post<RegisterModel>(this.urladduser,reg).pipe()
    }

}
