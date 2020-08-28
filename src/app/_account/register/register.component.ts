import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterModel } from '../../models/register-model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

@Output() registerMode= new EventEmitter<boolean>();


  constructor( private authservice:AuthService,
    private formBuilder: FormBuilder) {

    }

  userForm: FormGroup;
  user : RegisterModel;


messageValidate={
  name:{
      Required:'le nom est obligatoire'
  },
  prename:{
    Required:''
  },
 tel:{
   Required:''
  },
 email:{
   Required:''
 },
 password:{
   Required:'le mot de passe est obligatoire',
   MinLenght:'le mot de passe minimum est 8 characters'
 }
}
  ngOnInit() {
    this.initForm();
    this.user={
       name:'',
       emailadress:'',
       password:'',
       prename:'',
       tel:''
    }
  }
  initForm() {
    console.log("---------hello --------");

    this.userForm = this.formBuilder.group({
      name: ['',Validators.required],
      prename: ['',Validators.required],
      tel: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',[Validators.required,Validators.minLength(8)]]
    });
  }


  register(){

    if(this.userForm.valid){
      this.ValidateRegister();
      this.authservice.register(this.user).subscribe(
        next=>{console.log("success");},
        error=>{console.log("erreuuuur" );})
    }
  }
  ValidateRegister() {
    this.user.name = this.userForm.value.name;
    this.user.prename = this.userForm.value.prename;
    this.user.tel = this.userForm.value.tel;
    this.user.emailadress = this.userForm.value.email;
    this.user.password = this.userForm.value.password;
  }

  cancelRegister(){
    this.registerMode.emit(false);
  }
}
