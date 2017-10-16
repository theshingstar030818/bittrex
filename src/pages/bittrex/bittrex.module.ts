import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BittrexPage } from './bittrex';

@NgModule({
  declarations: [
    BittrexPage,
  ],
  imports: [
    IonicPageModule.forChild(BittrexPage),
  ]
})
export class BittrexPageModule {}
