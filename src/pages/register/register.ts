import {Component} from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { FormGroup, FormBuilder } from "@angular/forms";
import { RegistrationAPI } from "./registrationApi";

@IonicPage()
@Component({
  templateUrl:'register.html',
  providers:[RegistrationAPI]
})
export class RegistrationPage{
  registration:string = "employee";
  consumerForm:FormGroup;
  employeeForm:FormGroup;
  constructor(private navCtrl: NavController,
              private fb: FormBuilder,
              private regApi:RegistrationAPI){
              this.employeeForm = this.getForm();
  }

  getForm(){
    return this.fb.group({
      firstName:[],
      lastName:[],
      gender:[],
      dob:[],
      contactNo:[],
      email:[],
      password:[],
      confirmPassword:[]
    });
  }

  getSection(e:any){
    if(e == 'consumer') this.consumerForm = this.getForm();
    else this.employeeForm = this.getForm();
  }

  onSubmit(){
    delete this.employeeForm.value["confirmPassword"];    
    this.regApi.registerEmployee(this.employeeForm.value).subscribe((response)=>{
      console.log("success");
    })
  }
}