import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartDetailsModel, CartModel } from '../models/cart.model';

@Injectable({
    providedIn: 'root'
})
export class CartDataService {
	private cartSource = new BehaviorSubject(new CartModel({
        cartDetails: [],
        total: 0
    }));
	currentCart = this.cartSource.asObservable();

	constructor() {}

	changeCurrentCart(cart: CartModel) {
        cart = this.getCartWithCalculatedTotal(cart)
		this.cartSource.next(cart);
	}

    private getCartWithCalculatedTotal(cart: CartModel): CartModel {
        let total = 0;
        if (cart && cart.cartDetails) {
            cart.cartDetails.forEach((cartItem) => {
                total += (cartItem.quantity * cartItem.product.price);
            });
            cart.total = total;
        }
        return cart;
    }
    
}

