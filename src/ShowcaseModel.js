import ProductList from './ProductList.mjs'

export default class ShowcaseModel extends ProductList{
  constructor(apiHandler, eventEmmiter, cart) {
    super([])
    this.api = apiHandler
    this.cart = cart
    this.eventEmmiter = eventEmmiter
  }

  fetch(onError) {
    this.api.getCatalog(
      (data) => { 
        this.list = JSON.parse(data)
        this.eventEmmiter.emit('showcaseFeched', this.list)
      },
      onError
    )
  }

  buy(id, onError) {
    const product = this.find(id) 
    if(product) cart.add(product, onError)
  }

}