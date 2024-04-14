import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public displaymenu = false;
  public Showmenu1 = false;
  constructor(private route: Router) {}

  ngDoCheck(): void {
    if  (this.route.url == '/Employee' || this.route.url == '/'){
      this.displaymenu = false;
    } else {
      this.displaymenu = true;
    }
  }

  Showmenu(): void{
    if(this.Showmenu1== false){
   this.Showmenu1= true;
     }
     else{
       this.Showmenu1 =false;
     } }
}
