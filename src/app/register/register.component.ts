import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Output() registerMode= new EventEmitter<boolean>();
  user:any={};
  constructor( private authservice:AuthService) { }

  ngOnInit() {
  }
  adduser(){
this.authservice.adduser(this.user).subscribe(
  next=>{console.log("success");},
  error=>{console.log("erreuuuur");
  })}


  cancelRegister(){
    this.registerMode.emit(false);
  }
}
