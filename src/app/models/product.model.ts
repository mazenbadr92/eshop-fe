import { ServerResponse } from "./server-response.model";
import { UserModel } from "./user.model";

export class ProductModel extends ServerResponse {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  imageURL: string;
  rating: number;
  created_at: Date;
  modified_at: Date;
  productReview: ProductReview[];

  public constructor(init?: Partial<ProductModel>) {
    super();
    Object.assign(this, init);
  }
}


export class ProductReview  {

    id: number;
    product_id: number;
    user: UserModel;
    rating: number;
    review: string;
  
  public constructor(init?: Partial<ProductReview>) {
    Object.assign(this, init);
  }
}