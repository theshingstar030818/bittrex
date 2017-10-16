import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the BittrexPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bittrex',
  templateUrl: 'bittrex.html'
})
export class BittrexPage {

  tradeRoot = 'TradePage'
  walletRoot = 'WalletPage'
  marketsRoot = 'MarketsPage'
  currenciesRoot = 'CurrenciesPage'
  settingsRoot = 'SettingsPage'


  constructor(public navCtrl: NavController) {}

}
