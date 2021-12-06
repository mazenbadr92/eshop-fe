import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import { ProductModel } from "../../models/product.model";
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";
import { environment } from 'src/environments/environment';
import { CartDataService } from 'src/app/services/cart.data.service';
import { CartModel } from 'src/app/models/cart.model';
import { MatDialog } from '@angular/material/dialog';
import { ProductPopupComponent } from '../product/product-popup.component';
import { ProductDataService } from 'src/app/services/product.data.service';

@Component({
  selector: 'mg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  products: ProductModel[] = [];
  cartData: CartModel;
  
  constructor(private productService: ProductService,
              private cartService: CartService,
              private cartDataService: CartDataService,
              public productDataService: ProductDataService,
              public dialog: MatDialog,
              private router:Router) {
  }

  ngOnInit() {
    this.getAllProducts()
    this.subscribeToCurrentCart()
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response;
    })
  }

  selectProduct(id: Number) {
    // this.router.navigate(['/product', id]).then();
  }

  subscribeToCurrentCart() {
    this.cartDataService.currentCart.subscribe((cart) => {
      this.cartData = cart;
    });
  }

  viewProductDetails(product: ProductModel) {
    this.dialog.open(ProductPopupComponent, {
      data: product
    })
  }
}
