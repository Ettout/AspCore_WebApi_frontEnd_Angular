import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { NavComponent } from './nav/nav.component';
import {FormsModule} from "@angular/forms"
import { AuthService } from './_services/auth.service'
import { TokenInterceptorService } from './_services/token-interceptor.service'
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CategorisComponent } from './categoris/categoris.component';


@NgModule({
  declarations: [				
    AppComponent,
    UserComponent,
      NavComponent,
      RegisterComponent,
      HomeComponent,
      CategorisComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path : 'users' ,component:UserComponent},
      {path : 'categories' ,component:CategorisComponent},

    ])
  ],
  providers: [AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
