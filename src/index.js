import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import { send } from './utils.js'

const API_URL = 'http://localhost:3000/api/ver1'

let productList = [];
let cart = [];

send((error) => { console.log(err) }, (res) => {
  let list = JSON.parse(res);
  productList = list;
  renderGoodsList(productList);
}, `${API_URL}/catalog`)



