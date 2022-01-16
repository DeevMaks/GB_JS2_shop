import ApiHandler from './ApiHandler';
import CartModel from './CartModel';
import ShowcaseModel from './ShowcaseModel';
import EventEmitter from './EventEmitter';

const API_URL = 'http://localhost:3000/api/v1';
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