import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BittrexProvider } from './../../providers/bittrex/bittrex';
/**
 * Generated class for the MarketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-markets',
  templateUrl: 'markets.html',
})
export class MarketsPage {

	publicMarketsOrignal: Array<any>;
	publicMarkets: Array<any>;
	publicMarketsSearchText: string;
	shouldShowCancel: boolean = true;
	
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public bittrex: BittrexProvider
		) {}

	ngOnInit() {
		let me = this;
	    me.bittrex.getPublicMarkets().then((pMarkets)=>{
	      me.publicMarkets=pMarkets['result'];
	      me.publicMarketsOrignal=pMarkets['result'];
	      console.log(me.publicMarkets);
	    }).catch((error)=>{
	      console.error(error);
	    });
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MarketsPage');
	}

	setItems(event?: any) {
	    this.publicMarkets = this.publicMarketsOrignal;
	}

	filterItems(ev: any) {
	    this.setItems();
	    let val = ev.target.value;

	    if (val && val.trim() !== '') {
	      this.publicMarkets = this.publicMarkets.filter(function(market) {
	        return market['MarketName'].toLowerCase().includes(val.toLowerCase());
	      });
	    }
	}

}
