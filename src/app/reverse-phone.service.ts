import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
 
@Injectable({
  providedIn: 'root'
  
})
export class ReversePhoneService {
  url: string = "https://proapi.whitepages.com/3.0/phone?phone=";
  api: string = "0c613d7a01c2420eae892443413d5ad4"
  
  phone = "3342218929";  
  
  constructor(private _http:HttpClient) { }
    
    whitePages() {
      return this._http.get(this.url + this.phone + "&api_key=" + this.api)
  }
}
