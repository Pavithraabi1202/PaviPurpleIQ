import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OTPService {
  error(errorMessage: any) {
    throw new Error('Method not implemented.');
  }
  // verifyOTP(otp: string) {
  //   throw new Error('Method not implemented.');
  // }

  //private apiURL = 'https://cmxwebapi.purpleiq.ai/api/Authentication/TwoFactorAuthentication';

  // constructor(private http: HttpClient) {}

  // verifyOTP(otp: string) {
  //   return this.http.post(this.apiURL, { otpValue: otp });
  // }

  private OTPurl: string = 'https://cmxwebapi.purpleiq.ai/api/Authentication/TwoFactorAuthentication';
  // private OTPurl: string = 'https://cmxwebapi.purpleiq.ai/api/Authentication/TwoFactorAuthentication';
  constructor(private http: HttpClient) {} // Use the imported HttpClient class

  CheckOTP(jsonobj:any):Observable<any>{
    let result = this.http.post(this.OTPurl, jsonobj);
    console.log(result)
    return result;
  }
}

