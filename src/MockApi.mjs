// import { random } from 'lodash'
import * as fs from "fs";

export default class MockApi {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  getCatalog(onSuccess, onError) {
    onSuccess(
      JSON.stringify([
        { id: 1, title: "Hat black", price: 836 },
        { id: 2, title: "Hat white", price: 782 },
        { id: 3, title: "Shirt red", price: 639 },
        { id: 4, title: "Hat white", price: 217 },
        { id: 5, title: "Socks black", price: 524 },
        { id: 6, title: "Hat green", price: 676 },
        { id: 7, title: "Jacket orange", price: 511 },
        { id: 8, title: "Socks white", price: 329 },
        { id: 9, title: "Shirt black", price: 137 },
        { id: 10, title: "Shirt red", price: 678 },
        { id: 11, title: "Hat orange", price: 558 },
        { id: 12, title: "Shirt white", price: 750 },
        { id: 13, title: "Hat black", price: 448 },
        { id: 14, title: "Hat black", price: 168 },
        { id: 15, title: "Shirt green", price: 724 },
        { id: 16, title: "Hat green", price: 651 },
        { id: 17, title: "Shirt green", price: 643 },
        { id: 18, title: "Hat green", price: 921 },
        { id: 19, title: "Socks black", price: 441 },
        { id: 20, title: "Jacket white", price: 296 },
      ])
    );
  }

  getCart(onSuccess) {
    onSuccess(
      JSON.stringify([
        { id: 3, title: "Shirt red", price: 639 },
        { id: 20, title: "Jacket white", price: 296 },
        { id: 10, title: "Shirt red", price: 678 },
      ])
    );
  }

  addToCart(onSuccess) {
    onSuccess({ status: "OK" });
  }

  removeFromCart(onSuccess) {
    onSuccess({ status: "OK" });
  }

  getProductName() {
    const product = this.products[random(0, PRODUCTS.length - 1)];
    const color = this.colors[random(0, COLORS.length - 1)];

    return `${product} ${color}`;
  }

  getProduct() {
    return {
      id: ++this.lastIndex,
      title: this.getProductName(),
      price: random(99, 999),
    };
  }

  getProductList(count) {
    let products = [];

    for (let i = 0; i < count; i++) {
      products.push(this.getProduct());
    }

    return products;
  }
}
