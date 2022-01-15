"use strict";

var _data = _interopRequireDefault(require("./mock/data.js"));

var _showcase = _interopRequireDefault(require("./showcase.js"));

var _main = _interopRequireDefault(require("./style/main.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var productList = (0, _data["default"])(20); //renderGoodsList(productList);
//const listEl = document.querySelector(".showcase");

var filteredList = _toConsumableArray(productList);

(0, _showcase["default"])(filteredList);

function filterList() {
  var searchString = document.querySelector("#search-input").value;
  var regExp = new RegExp(searchString, 'i');
  var filteredListNew = filteredList.filter(function (_ref) {
    var title = _ref.title;
    return regExp.test(title);
  });
  console.log(filteredListNew);
  var listEl = document.querySelector('.showcase');
  render(filteredListNew);

  function getHtml(product) {
    return "<div class='goods-item'><h2>".concat(product.title, "</h2> <p>").concat(product.price, "$</p></div>");
  }

  ;

  function render(list) {
    listEl.textContent = '';
    listEl.insertAdjacentHTML('afterbegin', list.map(getHtml).join(''));
  }

  ; //renderGoodsList(filteredList);
}

document.querySelector("#search-btn").addEventListener('click', filterList); //const API_URL = 'http://localhost:3000/api/v1'

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