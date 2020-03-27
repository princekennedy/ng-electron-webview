import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlPagesService {

	private CURRENT = ["http://www.google.com"];
	private CURRENTSUBPAGES = [];
	private HISTORYPAGES =    [];
	private HISTORYSUBPAGES = [];
	public STORAGE = {
				"CURRENT":         [],
				"CURRENTSUBPAGES": [],
				"HISTORYPAGES":    [],
				"HISTORYSUBPAGES": []
			};

  	constructor() { }

  	public stringify(arr): string{
  		if(arr.length == 0)
  			return "";
  		return JSON.stringify(arr);
  	}  	

  	public parseStr(str){
  		if(str == "")
  			return [];
  		return JSON.parse(str);
  	}

  	public checkIfCached(index): string{
  		let str = (localStorage[index]) ? this.parseStr(localStorage[index] ) : [] ;
  		return str;
  	}

  	public initStorage(): void{
  		for( let index in this.STORAGE){
  			this.STORAGE[index] = this.checkIfCached(index);
  		}
  	}

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
		return this.STORAGE.CURRENT[0];
	}  	

	public setCurrentPage(value){
		value = this.validateUrl(value);
		this.STORAGE.CURRENT = [value];
		this.setHistoryPages(value)
		//-----------------------
  		localStorage.CURRENT = this.stringify(this.STORAGE.CURRENT);
	}


	public getCurrentSubPages(index){
		return this.STORAGE.CURRENTSUBPAGES[index];
	}

	public getHistoryPages(){
		return this.STORAGE.HISTORYPAGES;
	}

	public setHistoryPages(page){
		if(this.STORAGE.HISTORYPAGES.includes(page))
			return;
		this.STORAGE.HISTORYPAGES.push(page);
		//-----------------------
		localStorage.HISTORYPAGES = this.stringify(this.STORAGE.HISTORYPAGES);
	}	

	public getHistorySubPages(pageIndex ,index){
		return this.STORAGE.HISTORYSUBPAGES[pageIndex][index];
	}
	
}
