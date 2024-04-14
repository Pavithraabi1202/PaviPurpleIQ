import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PurpleIQ';
  public displaymenu = false;
  // public Showmenu1 = false;
  // public myFunction1=false;


  constructor(private route: Router) {}

  // ngDoCheck(): void {
  //   if (this.route.url == '/login' || this.route.url == '/') {
  //     this.displaymenu = false;
  //   } else {
  //     this.displaymenu = true;
  //   }
  // }
  //  Showmenu(): void{
  //   if(this.Showmenu1== false){
  //  this.Showmenu1= true;
  //    }
  //    else{
  //      this.Showmenu1 =false;
  //    } }
    //  myFunction():void{
    //   if(this.myFunction1==false){
    //     this.myFunction1=true;
    //   }
    //   else{
    //     this.myFunction1=false;
    //   }
  
    // }
     
}