import { Component, OnInit } from '@angular/core';
import { UrlPagesService } from '../url-pages.service';
import * as $ from "jquery";
// import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public loadPage = this.urlPagesService.getCurrentPage();
	public historyPages = this.urlPagesService.getHistoryPages();

    constructor(private urlPagesService: UrlPagesService) { }

    public loadPageNow(url):void{
		this.loadPage = url;
    	$('.webview').attr("src", url);
    }

	public ngOnInit(): void {
		this.loadPageNow(this.loadPage);
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
