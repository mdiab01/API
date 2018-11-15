import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
  url: string = "https://proapi.whitepages.com/3.0/phone?phone";
  
})
export class ReversePhoneService {

  constructor(private http:HttpClient) {}
    getData () {
      return this.http.get(this.url)
  }
}
