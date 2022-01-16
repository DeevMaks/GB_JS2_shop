import ApiHandler from './ApiHandler.js';
import CartModel from './CartModel.js';
import ShowcaseModel from './ShowcaseModel.js';
import EventEmitter from './EventEmitter.js'

const API_URL = 'http://localhost:3000/api/ver1'

const api = new ApiHandler(API_URL)
const eventEmmiter = new EventEmitter()

const cart = new CartModel(api, eventEmmiter)
const showcase = new ShowcaseModel(api, eventEmmiter, cart)

eventEmmiter.subscribe('showcaseFeched', (data) => {
  console.log("товары", data)
})

eventEmmiter.subscribe('cartFeched', (data) => {
  console.log('корзина', data)
})

//получаем список товаров
showcase.fetch()
//получаем список товаров в корзине
cart.fetch()
//отрисовываем витрину товаров
//showcase.show_button_buy()
//buy
//setTimeout(() => {showcase.buy(7)}, 3000);



