import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

	public currentLinks = ["https://www.tutorialspoint.com/"];
	public historyLinks = [];
	public headers = new HttpHeaders();
	public options = {};

	constructor(
			private httpClient: HttpClient
		) { 

		this.headers.append("Access-Control-Allow-Origin", "*");
		this.options = { 'headers': this.headers };
	}

	// function updateURL (event) {
	//     if (event.keyCode === 13) {
	//         omni.blur();
	//         let val = omni.value;
	//         let https = val.slice(0, 8).toLowerCase();
	//         let http = val.slice(0, 7).toLowerCase();
	//         if (https === 'https://') {
	//             view.loadURL(val);
	//         } else if (http === 'http://') {
	//             view.loadURL(val);
	//         } else {
	//         view.loadURL('http://'+ val);
	//         }
	//     }
	// }	

	public currentGetRequest(index){
		return this.httpClient.get(this.currentLinks[index] ,this.options );
	}

}