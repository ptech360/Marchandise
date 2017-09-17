import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ConsumerApp } from './consumer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    ConsumerApp
  ],
  imports: [
    IonicPageModule.forChild(ConsumerApp),
  ]
})
export class ConsumerModule {}
