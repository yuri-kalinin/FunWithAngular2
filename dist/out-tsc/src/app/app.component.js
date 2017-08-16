var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { CartComponent } from './cart/cart.component';
let AppComponent = class AppComponent {
    constructor(productsService, cartComponent) {
        this.productsService = productsService;
        this.cartComponent = cartComponent;
        this.title = 'Teh Shop';
        this.products = [];
        this.productGenerator = this.productsService.productGenerator();
        this.cart = this.cartComponent;
    }
    ngOnInit() {
        this.getMoreProducts(9);
    }
    buy(product) {
        this.cart.products.push(product);
        const i = this.products.indexOf(product);
        if (0 <= i) {
            this.products.splice(i, 1);
        }
        this.getMoreProducts(1);
    }
    getMoreProducts(count = 3) {
        // const res = Array.from(Array(count), _ => this.productGenerator.next().value);
        // this.products = this.products.concat(res);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [ProductsService, CartComponent])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map