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


	marketType: string = 'BTC';
	publicMarketsOrignal: Array<any>;
	publicMarketsSegment = {
		BTC: {},
		ETH: {},
		USD: {} 
	}
	
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
				me.publicMarketsOrignal=pMarkets['result'];
				me.setItemsBySegment('USD');
				me.setItemsBySegment('BTC');
				me.setItemsBySegment('ETH');
	    }).catch((error)=>{
	      console.error(error);
	    });
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MarketsPage');
	}

	setItemsBySegment(marketType){
		this.publicMarketsSegment[marketType]['orignal'] = this.publicMarketsOrignal.filter(function(market) {
			return market['BaseCurrency'].toLowerCase().includes(marketType.toLowerCase());
		});
		this.publicMarketsSegment[marketType]['curr'] = this.publicMarketsSegment[marketType]['orignal'];
	}

	setItems(event?: any) {
		this.publicMarketsSegment[this.marketType]['USD'] = this.publicMarketsSegment['USD']['orignal'];
		this.publicMarketsSegment[this.marketType]['BTC'] = this.publicMarketsSegment['BTC']['orignal'];
		this.publicMarketsSegment[this.marketType]['ETH'] = this.publicMarketsSegment['ETH']['orignal'];
	}

	filterItems(ev: any) {
	    this.setItems();
	    let val = ev.target.value;

	    if (val && val.trim() !== '') {
	      this.publicMarketsSegment[this.marketType]['curr'] = this.publicMarketsSegment[this.marketType]['orignal'].filter(function(market) {
	        return market['MarketName'].toLowerCase().includes(val.toLowerCase());
	      });
	    }
	}

}
