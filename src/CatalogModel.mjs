import ProductList from "./ProductList.mjs";

export default class CatalogModel extends ProductList {
  constructor(apiHandler, eventEmitter, cart) {
    super([], "catalog", "Add to cart");
    this.api = apiHandler;
    this.cart = cart;
    this.eventEmitter = eventEmitter;
  }

  fetch(onError) {
    this.api.getCatalog((data) => {
      this.list = JSON.parse(data);
      this.originalList = [...this.list];
      this.list.length > 0 ? (this.isVisible = true) : (this.isVisible = false);
      this.eventEmitter.emit("catalogFetched");
    }, onError);
  }

  buy(id, onError) {
    const product = this.list.find((product) => product.id === Number(id));
    if (product) this.cart.add(product, onError);
  }

  filterProducts() {
    this.list = [...this.originalList];
    this.searchLine = document.querySelector("#search-input").value;
    const regExp = new RegExp(this.searchLine, "i");
    this.list = [...this.list.filter((product) => regExp.test(product.title))];
    this.eventEmitter.emit("catalogFetched");
  }
}
