import { ProductModel } from "./product.model";
import { ServerResponse } from "./server-response.model";
import { UserModel } from "./user.model";

export class CartModel extends ServerResponse {
  id: number;
  user?: UserModel;
  isOrdered: boolean;
  cartDetails?: CartDetailsModel[];
  total?: number;
  public constructor(init?: Partial<CartModel>) {
    super();
    Object.assign(this, init);
  }
}

export class CartDetailsModel {
  id: number;
  cart_id: number;
  product: ProductModel;
  quantity: number;
}

export class UpdateCartModel {
  userId?: number;
  cartId: number;
  cartDetailId: number;
  productId: number;
  quantitiy: number;
  public constructor(init?: Partial<UpdateCartModel>) {
    Object.assign(this, init);
  }
}
