//import hello from "./module.js" // относительный путь к файлу, из которого импортируем. назвать можно как угодно, так как экспорт был по default
//import _ from "lodash" //подключаем библиотеку lodash через нижнее подчеркивание - _ это и есть символ лодаш

//hello(_.camelCase("super_admin")) //обращаемся к библиотеке лодаш через нижнее подчеркивание и подставляем в функцию hello значение

import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
//import { send } from './utils.js';
import css from "./style/main.css";

let productList = getProductList(20);
//renderGoodsList(productList);

//const listEl = document.querySelector(".showcase");
let filteredList = [...productList];

renderGoodsList(filteredList);

function filterList(){
  const searchString = document.querySelector("#search-input").value;

  const regExp = new RegExp(searchString, 'i');
  var filteredListNew = filteredList.filter(({title}) => regExp.test(title));
  console.log(filteredListNew);

  const listEl = document.querySelector('.showcase');
  render(filteredListNew);
  
  function getHtml(product) {
    return `<div class='goods-item'><h2>${product.title}</h2> <p>${product.price}$</p></div>`
  };

  function render(list) {
    listEl.textContent = '';
    listEl.insertAdjacentHTML('afterbegin', list.map(getHtml).join(''))
  };


  //renderGoodsList(filteredList);
}


document.querySelector("#search-btn").addEventListener('click', 
filterList);


//const API_URL = 'http://localhost:3000/api/v1'

/*let productList = [];
/let cart = [];

send((error) => { console.log(err) }, (res) => { 
  let list = JSON.parse(res);
  productList = list;
  renderGoodsList(productList);
}, `${API_URL}/catalog`)



// Пользователь добавляет товар в корзину
let buyed = {id: 5, title: "new", price: 999};
send((error) => { console.log(err) }, (res) => {
  cart.push(buyed)
}, `${API_URL}/cart`, 'POST', JSON.stringify(buyed), {"Content-Type": "application/json"})*/