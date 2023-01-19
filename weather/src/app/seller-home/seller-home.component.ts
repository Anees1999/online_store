import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../servicess/product.service';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
productList:undefined|product[]
productMessage:undefined|string
icon=faTrash;
editicon=faEdit;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
   this.list();
  }
  deleteProduct(id:number){
    console.warn("Test id ",id);
    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage="Product is Deleted ";
        this.list();
      }
    })
    setTimeout(()=>{
      this.productMessage=undefined
    },3000)
  }
list(){
 this.product.productList().subscribe((result)=>{
      console.warn(result);
      this.productList=result;
      
    })
}
}
