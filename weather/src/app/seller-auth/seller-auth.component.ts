import { Component, OnInit } from '@angular/core';
import { SellerService } from '../servicess/seller.service';
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService ,private router:Router) { }
  showLogin=false;
  authError:string='';
   ngOnInit():void{
    this.seller.reloadSeller();
  }
  signUp(data:SignUp):void{
   
    this.seller.userSignUp(data)

  }
   login(data:SignUp):void{
   this.authError='';
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email Password Not Matched"
      }
    })

  }
  openLogin(){
    this.showLogin=true;
  }
   openSignup(){
    this.showLogin=false;
  }
}
//.subscribe((result)=>{
     // if(result){
     //   this.router.navigate(['seller-home'])
    //  }
   // });