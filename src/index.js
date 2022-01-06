import ApiHandler from "./ApiHandler.js";
import CartModel from "./CartModel.js";
import CatalogModel from "./CatalogModel.js";
import EventEmitter from "./EventEmitter.js";
import "./style/style.scss";

const API_URL = "http://localhost:3000/api/v1";

const api = new ApiHandler(API_URL);
const eventEmitter = new EventEmitter();

const cart = new CartModel(api, eventEmitter);
const catalog = new CatalogModel(api, eventEmitter, cart);

eventEmitter.subscribe("catalogFetched", () => {
  catalog.renderList("catalog");
  catalog.addEvent();
});

eventEmitter.subscribe("cartFetched", () => {
  cart.renderList("cart");
  cart.addEvent();
});

catalog.fetch();
cart.fetch();
