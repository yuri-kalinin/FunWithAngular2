import { Injectable } from '@angular/core';
import * as sillyname from 'sillyname';

export class Product {
  constructor(public id: number, public name, public price) { }
  toString() {
    return `${this.name} ($${this.price.toFixed(2)})`;
  }
}

@Injectable()
export class ProductsService {

  constructor() { }
  productGenerator = function*(i = 0) {
    while (true) {
      yield new Product(i++, sillyname(), (Math.random() * 100));
    }
  };

}
