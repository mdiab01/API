import { Component } from '@angular/core';
import { ReversePhoneService } from './reverse-phone.service' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export  class  AppComponent  {
 phone:Number;
 results;

  constructor(public _api:  ReversePhoneService){}

 submit()  {
  this._api.whitePages()
  .subscribe((res:  any)  =>  {
  this.results = res.results;
 console.log(res);
  })
  }
}