import ProductList from "./ProductList.js";

export default class CartModel extends ProductList {
  constructor(apiHandler, eventEmitter) {
    super([], "cart");
    this.api = apiHandler;
    this.eventEmitter = eventEmitter;
  }

  fetch(onError) {
    this.api.getCart((data) => {
      this.list = JSON.parse(data);
      this.eventEmitter.emit("cartFetched");
    }, onError);
  }

  add(product, onError) {
    this.list.push(product);
    this.api.addToCart(() => {}, onError, this.list);
    this.eventEmitter.emit("cartFetched");
  }

  remove(id, onError) {
    this.list = this.list.filter((item) => item.id !== Number(id));
    this.api.addToCart(() => {}, onError, this.list);
    this.eventEmitter.emit("cartFetched");
  }
}
