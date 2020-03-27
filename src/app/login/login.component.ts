import { Component, OnInit } from '@angular/core';
import { UrlPagesService } from '../url-pages.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public uName:string;
  public uPass:string;

  constructor(
  		private urlPagesService: UrlPagesService,
    	private dataService: DataService,
		  private _router: Router,
      private _location: Location
	) { }

  public refresh(): void{
    this._router.navigate(['login']);
    // this._location.reload();
  }

  public getUser(){
    if( typeof localStorage.authUser == 'undefined')
      return this.dataService.authUser;
    return JSON.parse(localStorage.authUser);
  }

  ngOnInit() {
    this.dataService.authUser = this.getUser();
  }

  public login(){

    let userName = this.dataService.authUser.uName;
    let passWord = this.dataService.authUser.uPass;
    let inputName = this.uName;
    let inputPass = this.uPass;

    if(typeof inputName == "undefined"){
      alert('Username is required');
      return;  
    }

    if(typeof inputPass == "undefined"){
      alert('Password is required');
      return;
    }

    if(
        userName == "" && 
        passWord == ""
      ){
        this.dataService.authUser.uName = inputName;
        this.dataService.authUser.uPass = inputPass;
        localStorage.authUser = JSON.stringify(this.dataService.authUser);      
    }

    if(
        userName == inputName && 
        passWord == inputPass
      ){
      this._router.navigate(['/']);
    }else{
      alert("Ur not recognised");  
    }
    
    
  }



}
