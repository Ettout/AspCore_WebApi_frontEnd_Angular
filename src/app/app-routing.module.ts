import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './_account/register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
  {path : 'users' ,component:UserComponent},
  {path : 'register' ,component:RegisterComponent},
  {path : 'home' ,component:HomeComponent},
  {path : 'contact' ,component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
