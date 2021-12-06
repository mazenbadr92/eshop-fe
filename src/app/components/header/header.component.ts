import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartDetailsModel, CartModel} from "../../models/cart.model";
import { environment } from 'src/environments/environment';
import { Constants } from 'src/Constants/Constants';
import { CartDataService } from 'src/app/services/cart.data.service';

@Component({
  selector: 'mg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartData: CartModel;
  cartTotal: Number;

  constructor(public cartService: CartService, private cartDataService: CartDataService) {
  }

  ngOnInit() {
    this.getUserCart()
    this.subscribeToCurrentCart();
  }

  subscribeToCurrentCart() {
    this.cartDataService.currentCart.subscribe((cart) => {
      this.cartData = cart;
      this.cartTotal = cart.total;
    });
    
  }
  getUserCart() {
    this.cartService.getUserCart(environment.USER_ID, Constants.NOT_ORDERED_CART_FLAG).subscribe((response) => {
      this.cartDataService.changeCurrentCart(response[0]);
    })

  }
  deleteProductFromCart(cartItem: CartDetailsModel) {
    this.cartService.deleteProductFromCart(cartItem).subscribe((response) => {
      this.cartDataService.changeCurrentCart(response);
    })
  }

}
