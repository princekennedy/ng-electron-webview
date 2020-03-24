import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlPagesService {

	private CURRENT = ["http://www.google.com"];
	private CURRENTSUBPAGES = [];
	private HISTORYPAGES = [];
	private HISTORYSUBPAGES = [];

  	constructor() { }

  	public validateUrl(value): string {
        let https = value.slice(0, 8).toLowerCase();
        let http = value.slice(0, 7).toLowerCase();
        if (https === 'https://') {
            return value;
        } else if (http === 'http://') {
            return value;	            
        } else {
            return 'http://'+ value;
        }
	    
	}

  	public getCurrentPage(){
		return this.CURRENT[0];
	}  	

	public setCurrentPage(value){
		value = this.validateUrl(value);
		this.CURRENT = [value];
		this.setHistoryPages(value)
	}


	public getCurrentSubPages(index){
		return this.CURRENTSUBPAGES[index];
	}

	public getHistoryPages(){
		return this.HISTORYPAGES;
	}

	public setHistoryPages(page){
		if(this.HISTORYPAGES.includes(page))
			return;
		this.HISTORYPAGES.push(page);
	}	

	public getHistorySubPages(pageIndex ,index){
		return this.HISTORYSUBPAGES[pageIndex][index];
	}
	
}
