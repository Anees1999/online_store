import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
menuType:string='default';
sellerName:string='';

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        // console.warn(val.url)
        if(localStorage.getItem('seller')&&val.url.includes('seller')){
          console.warn("in Seller Area")
          this.menuType="seller"
          if(localStorage.getItem('seller')){
              let sellerstore=localStorage.getItem('seller');
              let sellerdata=sellerstore&&JSON.parse(sellerstore)[0];
              this.sellerName=sellerdata.name;
          }
        }
        else{
          console.warn("outside seller area")
          this.menuType="default"
        }
      }
      
    })
  }
  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

}
