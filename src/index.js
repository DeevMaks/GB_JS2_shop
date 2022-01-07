import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import { send } from './utils.js'
import {show_button_cart, show_cart, close_modal, opencart} from "./cart";
import {buy} from "./showcase.js";

const API_URL = 'http://localhost:3000/api/ver1'

let productList = [];
let cart = [];


// Получаем список товаров в корзине GET
export const get_server_cart = (delete_goods=false) => {
  console.log(delete_goods)
  send((error) => {console.log(err)}, (res) => {let cart_list = JSON.parse(res);cart = cart_list;
    show_button_cart(cart.length, cart); if (delete_goods) {close_modal(); opencart(cart)}}, `${API_URL}/cart`)
}
get_server_cart(false);

// Получаем список товаров GET
send((error) => { console.log(err) }, (res) => {
  let list = JSON.parse(res); productList = list; renderGoodsList(productList); buy()}, `${API_URL}/catalog`)

