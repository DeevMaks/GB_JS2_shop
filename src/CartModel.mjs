import ProductList from "./ProductList.mjs";

export default class CartModel extends ProductList {
  constructor(apiHandler, eventEmitter) {
    super([], "cart", "Remove Item");
    this.api = apiHandler;
    this.eventEmitter = eventEmitter;
  }

  fetch(onError) {
    this.api.getCart((data) => {
      this.list = JSON.parse(data);
      this.list.length > 0 ? (this.isVisible = true) : (this.isVisible = false);
      this.eventEmitter.emit("cartFetched");
    }, onError);
  }

  add(product, onError) {
    this.isVisible = true;
    this.list.push(product);
    this.api.addToCart(
      (success) => {
        console.log("add() is returned with status: " + success.status);
      },
      onError,
      this.list
    );
    this.eventEmitter.emit("cartFetched");
  }

  remove(id, onError) {
    this.list = this.list.filter((item) => item.id !== Number(id));
    this.api.addToCart(
      (success) => {
        console.log("remove() is returned with status: " + success.status);
      },
      onError,
      this.list
    );
    this.list.length > 0 ? (this.isVisible = true) : (this.isVisible = false);
    this.eventEmitter.emit("cartFetched");
  }
}
