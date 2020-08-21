import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

constructor() { }

intercept(req, next) {
  let tokenizedReq = req.clone(
    {
      headers: req.headers.set('Authorization', 'bearer ' + localStorage.getItem('token'))
    }
  )
  return next.handle(tokenizedReq)
}

}