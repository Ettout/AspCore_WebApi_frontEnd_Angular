import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CategorisComponent } from './categoris/categoris.component';


export const routes: Routes = [
  {path : 'users' ,component:UserComponent},
  {path : 'categories' ,component:CategorisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
