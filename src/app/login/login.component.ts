import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginDetails } from '../login-details';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 export class LoginComponent {
  private firstNumber!: number;
  private secondNumber: number = 100;
  public resultArr: string[] = ['Shimmni Rai', 'Pavithra', ];
  private responseData: any;
  

  constructor(private auth:AuthService, private route: Router) {
    localStorage.clear();
  }
  Login = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required])
  });

  public ProceedLogin(): void {
    if (this.Login.valid) {

       let prams  = {
        userId: this.Login.value.username,
          password: this.Login.value.password
  
       };


      this.auth.CheckLogin(prams).subscribe((data: any) => {
       console.log(data.isError)
        if (data.isError==false) {

          this.responseData = data;
          localStorage.setItem( 'userId',this.responseData.email)
          localStorage.setItem('token', this.responseData.token);
          localStorage.setItem('Role', 'Admin');
          localStorage.setItem('loginToken', 'userID');
          this.route.navigate(['OTP'], { state: { userName: this.responseData.userName } });

        }

      });

      console.log("Inside Login function");

    }
    else {
      console.log('Login Failed');
    }

  }
  
 
}