import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { product } from '../data-type';
import { ProductService } from '../servicess/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

  constructor(private product:ProductService) { }
  addProductMessage:string|undefined
  ngOnInit(): void {
  }
  submit(data:product){
    
    this.product.addProduct(data).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.addProductMessage="Product Added Successfully";
      }
      else{
        this.addProductMessage="Not Added Succesfully";
      }
      setTimeout(()=>this.addProductMessage=undefined,3000)
      
    })
  }

}
