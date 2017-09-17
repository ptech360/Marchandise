import { Component } from "@angular/core";
import { Platform, NavController, IonicPage } from "ionic-angular";
// import { HomePage } from "../consumer/home/home";
@IonicPage()
@Component({
  templateUrl: 'login.html',
  // providers: [AuthenticationApi]
})
export class LoginPage {
  username: string;
  password: string;
  constructor(public nav: NavController, 
              public platform: Platform, 
              // public authenticationApi: AuthenticationApi
              ) {
  }

  login() {
    // this.authenticationApi.login(this.username, this.password).subscribe(
    //   data => {
    //     //Navigate to home page              
    //     this.nav.setRoot(ConsumerApp);
    //   }
    // )
    this.nav.setRoot('ConsumerApp');
  }
  register(){
    this.nav.push('RegistrationPage');
  }
}