import {AfterViewInit, Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {map} from "rxjs/operators";
import {CartService} from "../../services/cart.service";
import { ProductModel } from 'src/app/models/product.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductDataService } from 'src/app/services/product.data.service';

declare let $: any;

@Component({
  selector: 'mg-product',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.scss']
})
export class ProductPopupComponent implements OnInit {

  @Input() product: ProductModel;


  constructor(public dialogRef: MatDialogRef<ProductPopupComponent>,
    public productDataService: ProductDataService,
		@Inject(MAT_DIALOG_DATA) public data: ProductModel) {
      this.product = data;
  }

  ngOnInit(): void {
  }

  onCloseClick(): void {
		this.dialogRef.close();
	}
}
