import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CartComponent} from "./components/cart/cart.component";
import {ProductPopupComponent} from "./components/product/product-popup.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'product/:id', component: ProductPopupComponent
  },
  {
    path: 'cart', component: CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
