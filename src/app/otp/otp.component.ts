import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OTPService } from '../otp.service';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OTPComponent {
  
  responseData: any;
   userId:any;
   OTPForm: FormGroup;
   submitted = false;
  useremail: string | null;
  
   constructor(
    private auth: OTPService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder // Inject FormBuilder
  )  {
    
    this.userId= this.route.snapshot.paramMap.get('userId');
    this.useremail= localStorage.getItem('userId')
     localStorage.clear();

     this.OTPForm = this.formBuilder.group({
      UserCode: ['', [Validators.required, Validators.minLength(4)]]
    });

   }
  
   public ProceedOTP(): void {
    this.submitted = true;
     if (this.OTPForm.valid) {

        let prams  = {
          userId: this.useremail,
          
    twoAuthCode: this.OTPForm.value.UserCode

       };
        
  this.auth.CheckOTP(prams).subscribe((data: any) => {
    console.log(data.isError)
    if (data.isError==false) {

       this.responseData = data;
       localStorage.setItem('userId', this.userId);
       localStorage.setItem('token', this.responseData.token);
      localStorage.setItem('Role', 'Admin');
       this.router.navigate(['Employee']);
     }
}
     
  )  
}

}

}