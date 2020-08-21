import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

model:any={};

  constructor( private authservice:AuthService) { }

  ngOnInit() {
  }

  login(){
    console.log(this.model);
    
    this.authservice.login(this.model).subscribe(
      next=>{console.log("success");},
      error=>{console.log("erreuuuur"); })

      console.log("the token is : "+this.loggedIn());

  }
  getToken() {
    return localStorage.getItem('token')
  }
  loggedIn() {
    return !!localStorage.getItem('token')    
  }
  logoutUser() {
    console.log("the token is : "+this.loggedIn());
    localStorage.removeItem('token')
  }

}
