import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BittrexProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BittrexProvider {

  constructor(public http: Http) {
  }

  getPublicMarkets(){
    let me = this;
    return new Promise((resolve, reject) => {
      let url = 'https://bittrex.com/api/v1.1/public/getmarkets';
      this.http.get(url).map(res => res.json()).subscribe(data => {
        resolve(data);
      });
    });
  }

  // /public/getcurrencies
  // Used to get all supported currencies at Bittrex along with other meta data.

  // Parameters
  // None

  getCurrencies(){
    let me = this;
    return new Promise((resolve, reject) => {
      let url = 'https://bittrex.com/api/v1.1/public/getcurrencies';
      this.http.get(url).map(res => res.json()).subscribe(data => {
        resolve(data);
      });
    });
  }
  
}
