import { Component, OnInit } from '@angular/core';
import { UrlPagesService } from '../url-pages.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public loadPage = '';
	public historyPages = [];

    constructor(
    	private urlPagesService: UrlPagesService,
    	private dataService: DataService,
		private _router: Router
    ) { }

    public initNav(): void{

		$('<a href="#sidebar" class="toggle">Toggle</a>')
			.appendTo('#sidebar')
			.on('click', function(event) {
				// Prevent default.
				event.preventDefault();
				event.stopPropagation();
				// Toggle.
				$('#sidebar').toggleClass('inactive');
			});	

    }

    public loadPageNow(url):void{
    	// console.log(this.urlPagesService.STORAGE);
		this.loadPage = url;
    	$('.webview').attr("src", url);
    }
    
	public ngOnInit(): void {
		
		if(this.dataService.authUser.uName == '' ){
			this._router.navigate(['login']);
		}

		this.urlPagesService.initStorage();
		this.initNav();
		this.loadPageNow(this.loadPage);
		this.loadPage = this.urlPagesService.getCurrentPage();
	 	this.historyPages = this.urlPagesService.getHistoryPages();
	 // this.dataService.currentGetRequest(0).subscribe((data: any[])=>{
	 //      console.log(8999);
	 //      console.log(data);
	 //    }) 
	 
	}

	public searchPage(value): void{
		value = this.urlPagesService.validateUrl(value);
		this.urlPagesService.setCurrentPage(value);
		this.loadPageNow(value);
	}

}
