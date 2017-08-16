var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import * as sillyname from 'sillyname';
var Category;
(function (Category) {
    Category[Category["Cat1"] = 0] = "Cat1";
    Category[Category["Cat2"] = 1] = "Cat2";
    Category[Category["Cat3"] = 2] = "Cat3";
})(Category || (Category = {}));
export class Product {
    constructor(id, category, name, price, isAvailable) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.price = price;
        this.isAvailable = isAvailable;
        this.ingredients = Array.from(Array(3), _ => sillyname.randomNoun());
        this.equivalents = Array.from(Array(3), _ => sillyname.randomNoun());
    }
    get description() {
        return `Item Id: ${this.id}
    Category: ${this.category}
    Available: ${this.isAvailable}
    Ingredients: ${this.ingredients.join(', ')}
    Equivalents: ${this.equivalents.join(', ')}`;
    }
    toString() {
        return `${this.name} ($${this.price.toFixed(2)})`;
    }
}
let ProductsService = class ProductsService {
    constructor() {
        this.productGenerator = function* (i = 0) {
            while (true) {
                const cat = Category[getRandomInt(0, 3)];
                yield new Product(i++, cat, sillyname(), (Math.random() * 100), Math.random() > .5);
            }
        };
    }
};
ProductsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], ProductsService);
export { ProductsService };
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}
//# sourceMappingURL=products.service.js.map