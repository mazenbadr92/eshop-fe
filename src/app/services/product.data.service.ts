import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartDetailsModel, CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';
import { CartDataService } from './cart.data.service';
import { CartService } from './cart.service';

@Injectable({
    providedIn: 'root'
})
export class ProductDataService {
    private cartData: CartModel;

	constructor(private cartDataService: CartDataService, private cartService: CartService) {
    this.subscribeToCurrentCart();
  }

	addProductToCart(product: ProductModel) {
        this.cartService.addProductToCart({
            cartDetailId: undefined,
            cartId: this.cartData ? this.cartData.id : undefined,
            productId: product.id,
            quantitiy: 1,
            userId: environment.USER_ID
          }).subscribe((response) => {
            this.cartDataService.changeCurrentCart(response);
          })
	}

    subscribeToCurrentCart() {
        this.cartDataService.currentCart.subscribe((cart) => {
          this.cartData = cart;
        });
      }
}

