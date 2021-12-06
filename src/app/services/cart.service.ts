import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import { Constants } from 'src/Constants/Constants';
import { CartDetailsModel, CartModel, UpdateCartModel } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
  }


  getUserCart(userId: number, isOrdered: boolean): Observable<CartModel[]> {
    return this.http.get<CartModel[]>(`${Constants.BASE_API_PATH}/${Constants.ENTITY_SERVICE_PATH.cart}/${userId}/${isOrdered}`);
  }

  addProductToCart(updateCartModel: UpdateCartModel): Observable<CartModel> {
    return this.http.put<CartModel>(`${Constants.BASE_API_PATH}/${Constants.ENTITY_SERVICE_PATH.cart}`, updateCartModel);
  }

  deleteProductFromCart(cartDetail: CartDetailsModel): Observable<CartModel> {
    return this.http.delete<CartModel>(`${Constants.BASE_API_PATH}/${Constants.ENTITY_SERVICE_PATH.cart}/${cartDetail.id}/${cartDetail.cart_id}`);
  }
}
