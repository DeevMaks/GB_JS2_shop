import ApiHandler from './ApiHandler.mjs';
import CartModel from './CartModel.mjs';
import ShowcaseModel from './ShowcaseModel.mjs';
import EventEmitter from './EventEmitter.mjs';

const API_URL = '/api/v1';
const api = new ApiHandler(API_URL);
const eventEmmiter = new EventEmitter();
const cart = new CartModel(api, eventEmmiter);
const showcase = new ShowcaseModel(api, eventEmmiter, cart);

eventEmmiter.subscribe('showcaseFeched', (data) => {
  console.log(data)
})

eventEmmiter.subscribe('cartFeched', (data) => {
  console.log(data)
})

// showcase.fetch()
// cart.fetch()

// eventEmmiter.subscribe('showcaseFeched', () => {
//   showcase.buy(1)
// })
//=========================================================
import getProductList from "./MockApi.mjs";

const productList = getProductList(20);
let filteredList = [...productList];

function getHtml(product) {
  return `<div><h2>${product.title}$</h2> <p>${product.price}$</p></div>`
}

function render(list) {
  const listEl = document.querySelector('#list');

  listEl.textContent = '';
  listEl.insertAdjacentHTML('afterbegin', list.map(getHtml).join(''));
}

function filter() {
  const searchString = document.querySelector('#seqrch-input').value;
  const regEx = new RegExp(searchString, 'ig');
  filteredList = list.filter(({title}) => RegExp.test(title));

  render(filteredList);
}

render(filteredList);
document.querySelector('#search-btn').addEventListener('click', filter);
