import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent],
  imports: [
	  	CommonModule, 
	  	SharedModule, 
	  	HomeRoutingModule ,
	  	HttpClientModule
  	]
})
export class HomeModule {}
