import ApiHandler from './ApiHandler.js';
import CartModel from './CartModel.mjs';
import ShowcaseModel from './ShowcaseModel.mjs';
import EventEmitter from './EventEmitter.mjs';
import Showcase from './Showcase';

import './styles/style.css';
import './styles/style.scss';

const API_URL = 'http://localhost:3000/api/v1'

const api = new ApiHandler(API_URL)
const eventEmmiter = new EventEmitter()

const cart = new CartModel(api, eventEmmiter)
const showcase = new ShowcaseModel(api, eventEmmiter, cart)
const show = new Showcase(api, eventEmmiter)

eventEmmiter.subscribe('showcaseFeched', (data) => {
    console.log(data)
})

eventEmmiter.subscribe('cartFeched', (data) => {
    console.log(data)
})

showcase.fetch()
// cart.fetch()
show.fetchGoods(() => {
    show.render();
});