import { Component, ViewChild } from '@angular/core';
import { Nav, IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  templateUrl: 'consumer.html'
})
export class ConsumerApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  pages: Array<{title: string, component: any}>;

  constructor() {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'List', component:'ListPage' }
    ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
