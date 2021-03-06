import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "" ,component:HomeComponent},
  { path: "login" ,component:LoginComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes ,{ useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
                LoginComponent,
                HomeComponent 
            ];
