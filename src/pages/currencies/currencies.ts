import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BittrexProvider } from './../../providers/bittrex/bittrex';

/**
 * Generated class for the CurrenciesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-currencies',
  templateUrl: 'currencies.html',
})
export class CurrenciesPage {

	currenciesOrignal: Array<any>;
	currencies: Array<any>;
	currenciesSearchText: string;
	shouldShowCancel: boolean = true;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public bittrex: BittrexProvider
		) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CurrenciesPage');
	}

	ngOnInit() {
		let me = this;
	    me.bittrex.getCurrencies().then((pMarkets)=>{
	      me.currencies=pMarkets['result'];
	      me.currenciesOrignal=pMarkets['result'];
	      console.log(me.currencies);
	    }).catch((error)=>{
	      console.error(error);
	    });
	}

	setItems(event?: any) {
	    this.currencies = this.currenciesOrignal;
	}

	filterItems(ev: any) {
	    this.setItems();
	    let val = ev.target.value;

	    if (val && val.trim() !== '') {
	      this.currencies = this.currencies.filter(function(currency) {
	        return (currency['Currency'].toLowerCase().includes(val.toLowerCase()) || currency['CurrencyLong'].toLowerCase().includes(val.toLowerCase()));
	      });
	    }
	}

}
