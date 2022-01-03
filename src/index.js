import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import renderCartList from "./showcart.js";
import { send } from './utils.js'


const API_URL = 'http://localhost:3000/api/ver1'

let productList = [];
let cart = [];

// Получаем список товаров GET
send((error) => { console.log(err) }, (res) => {
  let list = JSON.parse(res); productList = list; renderGoodsList(productList);}, `${API_URL}/catalog`)

// Получаем список товаров в корзине GET
send((error) => { console.log(err) }, (res) => {
  let cart_list = JSON.parse(res); cart = cart_list; renderCartList(cart);}, `${API_URL}/cart`)



