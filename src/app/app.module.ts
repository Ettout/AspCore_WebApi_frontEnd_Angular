import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule, FormsModule} from "@angular/forms"
import { AuthService } from './_services/auth.service'
import { TokenInterceptorService } from './_services/token-interceptor.service'
import { RegisterComponent } from './_account/register/register.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CategorisComponent } from './categoris/categoris.component';
import {SignInHomeComponent} from './home/signInHome/signInHome.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [	
    AppComponent,
    UserComponent,
    NavComponent,
    RegisterComponent,
    HomeComponent,
    CategorisComponent,
    SignInHomeComponent,
      ContactComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
