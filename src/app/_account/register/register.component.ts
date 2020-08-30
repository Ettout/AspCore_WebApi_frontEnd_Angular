import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterModel } from '../../models/register-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() registerMode = new EventEmitter<boolean>();

  constructor(
    private authservice: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  userForm: FormGroup;
  user: RegisterModel;

  messageValidate = {
    name: {
      Required: 'le nom est obligatoire',
    },
    prename: {
      Required: 'le prenom est obligatoire ',
    },
    tel: {
      Required: 'il faut saisir le numero de telephone',
    },
    email: {
      Required: 'il faut un email',
      isValid: 'email n est pas valid ',
    },
    password: {
      Required: 'le mot de passe est obligatoire',
      MinLenght: 'le mot de passe minimum est 8 characters',
    },
    confirmedPassword: {
      Required: 'le confirmed mot de passe est obligatoire',
      MinLenght: 'le confirmed mot de passe minimum est 8 characters',
      IsMatch: 'les deux mots de passe ne sont pas identique',
    },
  };
  ngOnInit() {
    this.initForm();
    this.user = {
      name: '',
      emailadress: '',
      password: '',
      prename: '',
      tel: '',
    };
  }
  initForm() {
    console.log('---------hello --------');

    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      prename: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmedPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  register() {
    if (this.userForm.valid) {
      this.ValidateRegister();
      this.authservice.register(this.user).subscribe(
        (next) => {
          console.log('success');
          this.router.navigate(['home']);
        },
        (error) => {
          console.log('erreuuuur');
        }
      );
    }
  }
  ValidateRegister() {
    this.user.name = this.userForm.value.name;
    this.user.prename = this.userForm.value.prename;
    this.user.tel = this.userForm.value.tel;
    this.user.emailadress = this.userForm.value.email;
    this.user.password = this.userForm.value.password;
  }

  MotPassConfirm() {
    if (
      this.userForm.value.password !== '' &&
      this.userForm.value.confirmedPassword !== ''
    ) {
      if (
        this.userForm.value.password !== this.userForm.value.confirmedPassword
      ) {
        return true;
      }
    }
    return false;
  }

  cancelRegister() {
    this.registerMode.emit(false);
  }
}
