import ProductList from "./ProductList.mjs";

export default class CatalogModel extends ProductList {
  constructor(apiHandler, eventEmitter, cart) {
    super([], "catalog");
    this.api = apiHandler;
    this.cart = cart;
    this.eventEmitter = eventEmitter;
  }

  fetch(onError) {
    this.api.getCatalog((data) => {
      this.list = JSON.parse(data);
      this.eventEmitter.emit("catalogFetched");
    }, onError);
  }

  buy(id, onError) {
    const product = this.list.find((product) => product.id === Number(id));
    if (product) this.cart.add(product, onError);
  }
}
