import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OTPComponent } from './otp/otp.component';
import { AdministrationComponent } from './administration/administration.component';
import { EmployeeComponent } from './employee/employee.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: LoginComponent},
  { path: 'OTP', component: OTPComponent},
   { path: 'Administration', component: AdministrationComponent},
  { path: 'Employee', component: EmployeeComponent},
  { path: 'sidebar', component: SidebarComponent},
  { path: 'Administration/Employee', component: EmployeeComponent },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
