import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { ProductModel } from '../models/product.model';
import { Constants } from 'src/Constants/Constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${Constants.BASE_API_PATH}/${Constants.ENTITY_SERVICE_PATH.product}`);
  }

  getProductsByIds(ids: string): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${Constants.BASE_API_PATH}/${Constants.ENTITY_SERVICE_PATH.product}/${ids}`);
  }



}
