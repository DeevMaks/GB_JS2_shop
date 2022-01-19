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

eventEmmiter.subscribe('showcaseFeched', () => {
  showcase.buy(1)
})
