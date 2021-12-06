import { TestBed } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { ProductService } from "./product.service"
import { HttpClient } from "@angular/common/http";
import { Constants } from "src/Constants/Constants";
import { ProductModel } from "../models/product.model";

describe('Product Service', () => {
  let productService: ProductService;
  let httpClientService: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule(({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    }));
    productService = TestBed.inject(ProductService);
    httpClientService = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  })

  afterEach(() => {
    httpTestingController.verify();
  })

  it('service created', () => {
    expect(productService).toBeDefined();
  })
  
  it('product API', () => {
    const testProducts: ProductModel[] =[{
      created_at: new Date(),
      description: 'test',
      id: 1,
      imageURL: 'test',
      modified_at: new Date(),
      name: 'test',
      price: 22,
      productReview: [],
      quantity: 25,
      rating: 5
    }]

    productService.getAllProducts().subscribe(
      (response) => {
        expect(response).toEqual(testProducts)
      }
    )
    const req = httpTestingController.expectOne(`${Constants.BASE_API_PATH}/${Constants.ENTITY_SERVICE_PATH.product}`);
    expect(req.request.method).toEqual('GET');
    req.flush(testProducts)
  })
})