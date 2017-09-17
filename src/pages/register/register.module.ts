import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RegistrationPage } from './register';

@NgModule({
  declarations: [
    RegistrationPage
  ],
  imports: [
    IonicPageModule.forChild(RegistrationPage),
  ],
})
export class RegisterationModule {}
