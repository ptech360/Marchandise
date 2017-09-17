import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ListPage } from './list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    ListPage
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
  ]
})
export class HomeModule {}
