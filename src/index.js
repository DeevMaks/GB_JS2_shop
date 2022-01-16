import ApiHandler from "./ApiHandler.mjs";
import CartModel from "./CartModel.mjs";
import CatalogModel from "./CatalogModel.mjs";
import EventEmitter from "./EventEmitter.mjs";
import "./style/style.scss";

const API_URL = "./api/v1";

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
