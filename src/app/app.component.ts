import {Component, OnInit} from '@angular/core';
import * as sillyname from 'sillyname';
import {Product, ProductsService} from './products.service';
import {CartComponent} from './cart/cart.component';

enum Category {
  Cat1, Cat2, Cat3,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public productsService: ProductsService, public cartComponent: CartComponent) { }
  title = 'Teh Shop';
  name = 'Item Name';
  description = 'Item Description';
  price = 42;
  category = Category.Cat1;
  isAvailable = true;
  ingredients = Array.from(Array(3), _ => sillyname.randomNoun());
  equivalents = Array.from(Array(3), _ => sillyname.randomNoun());
  products: Product[] = [];
  productGenerator = this.productsService.productGenerator();
  cart: Product[] = [];

  ngOnInit() {
    this.getMoreProducts(9);
  }
  buy(product: Product): void {
    this.cart.push(product);
    const i = this.products.indexOf(product);
    if (0 <= i) {
      this.products.splice(i, 1);
    }
    this.getMoreProducts(1);
  }
  getMoreProducts(count = 3): void {
    const res = Array.from(Array(count), _ => this.productGenerator.next().value);
    this.products = this.products.concat(res);
  }
  getCartPriceDisplay(): string {
    return '$' + this.cart.reduce((sum, p) => sum + p.price, 0).toFixed(2);
  }
}
