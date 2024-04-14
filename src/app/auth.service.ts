import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDetails } from './login-details';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginwithOTP(loginForms: { userId: any; twoAuthCode: any; }) {
    throw new Error('Method not implemented.');
  }

  private apiurl: string = 'https://cmxwebapi.purpleiq.ai/api/Authentication/Login';
  constructor(private http: HttpClient) {} // Use the imported HttpClient class

  CheckLogin(jsonobj:any):Observable<any>{
    let result = this.http.post(this.apiurl, jsonobj);
    console.log(result)
    return result;
  }
  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }
  getToken() {
    return 'TestToken';
  }
}

