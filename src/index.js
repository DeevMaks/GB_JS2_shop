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

showcase.fetch()
cart.fetch()

// eventEmmiter.subscribe('showcaseFeched', () => {
//   showcase.buy(1)
// })

setTimeout(() => {
  showcase.buy(1);
}, 1000)

setTimeout(() => {
  showcase.buy(2);
}, 2000)

setTimeout(() => {
  cart.remove(1);
}, 3000)

//=========================================================
// import getProductList from "./MockApi.mjs";

function fetch() {
  [{"id":1,"title":"Jacket white","price":336},{"id":2,"title":"Hat red","price":116},{"id":3,"title":"Socks orange","price":970},{"id":4,"title":"Jacket white","price":386},{"id":5,"title":"Shirt black","price":262},{"id":6,"title":"Jacket white","price":482},{"id":7,"title":"Shoes black","price":237},{"id":8,"title":"Hat orange","price":570},{"id":9,"title":"Hat green","price":279},{"id":10,"title":"Shirt orange","price":441},{"id":11,"title":"Hat white","price":778},{"id":12,"title":"Hat white","price":938},{"id":13,"title":"Shirt red","price":145},{"id":14,"title":"Jacket green","price":730},{"id":15,"title":"Jacket black","price":234},{"id":16,"title":"Hat black","price":667},{"id":17,"title":"Hat white","price":675},{"id":18,"title":"Hat orange","price":574},{"id":19,"title":"Hat red","price":558},{"id":20,"title":"Hat orange","price":382}]
}

function getHtml(product) {
  return `<div><h2>${product.title}$</h2> <p>${product.price}$</p></div>`
}

function render(list) {
  const listEl = document.querySelector('#list');

  listEl.textContent = '';
  listEl.insertAdjacentHTML('afterbegin', list.map(getHtml).join(''));
}

function filter() {
  const searchString = document.querySelector('#search-input').value;
  const regEx = new RegExp(searchString, 'ig');
  filteredList = list.filter(({title}) => RegExp.test(title));

  render(filteredList);
}

// const productList = getProductList(20);
const productList = fetch();
let filteredList = [...productList];

render(filteredList);
document.querySelector('#search-btn').addEventListener('click', filter);
