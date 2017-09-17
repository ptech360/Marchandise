import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegistrationAPI{
  baseUrl:string = "http://localhost:8080/Emarchandise/self/";
  constructor(private http:Http){
    console.log("aaya");
  }
  registerEmployee(data:any){
    return this.http.post(this.baseUrl+"employee",data)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status === 204) { return res; }
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      if (error.status === 0) {
        errMsg = `${error.status} - "No Internet"`;
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}