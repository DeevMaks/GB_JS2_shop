import ProductList from './ProductList.js'
import {show_button_cart} from "./cart";

export default class CartModel extends ProductList {
  constructor(apiHandler, eventEmmiter) {
    super([])
    this.api = apiHandler
    this.eventEmmiter = eventEmmiter
  }

  fetch(onError) {
    this.api.getCart(
      (data) => { 
        this.list = JSON.parse(data)
        this.eventEmmiter.emit('cartFeched', this.list)
        this.show_button_cart(this.list.length, this.list)
      },
      onError
    )
  }

  add(product, onError) {
    //console.log("call add", product)
    this.api.addToCart(
      () => {
        this.list.push(product)
      },
      onError,
      product
    )
  }

  remove(id, onError) {
    if(this.find(id)) {
      this.api.removeFromCart(
        () => {
          this.remove(id)
        },
        onError,
        this.list[index]
      )
    }
  }

   show_button_cart(count, cart) {
     let but = document.createElement('th')
     but.innerHTML = `<button id="b_cart" type="submit" class="btn btn-primary">Корзина ${count} товаров</button>`
     let place = document.querySelector('.ins')
     let place2 = document.querySelector('tr.ins > th:last-child')
     place.removeChild(place2)
     place.append(but)
     let b_cart = place.querySelector('#b_cart')
     b_cart.onclick = function () {
       this.opencart(cart);
     }
   }

   // создание модального окна
opencart (cart) {
    let element = document.createElement('div')
    element.className = 'modal_cart'
    element.innerHTML = `'<div class="modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Корзина</h4></div><div class="modal-body"><table class="table goods-item"><thead><tr class="ins2"><th scope="col">#</th><th scope="col">Title</th><th scope="col">Price</th><th scope="col"></th></tr></thead><tbody class="showcase_cart"></tbody></table></div><div class="modal-footer"><button id="btn_close" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button></div></div></div></div>'`
    document.body.appendChild(element);
    let btn_close = document.querySelector('#btn_close')
    btn_close.addEventListener('click', this.close_modal);
    this.show_cart(cart);
    this.delete_good();
}

//закрытие модального окна
close_modal () {
    let modal_close = document.querySelector('.modal_cart')
    document.body.removeChild(modal_close)
    console.log("close")

}

  rendercart ({id, title, price}) {
    return `<tr>            
            <th scope="row">${id}</th>
            <td>${title}</td>
            <td>${price}</td>
            <td><button id="del" type="submit" class="btn btn-danger" value='${id}'>Убрать из корзины</button></td>
            </tr>`;
}

//показ содержимого корзины
show_cart (cart) {
    let cart_list = cart.map((item) => {return this.rendercart(item)}).join('');
    document.querySelector('.showcase_cart').insertAdjacentHTML('beforeend', cart_list)
}

 delete_good () {
   let del_button = document.querySelectorAll('#del')
   for (var i = 0; i < del_button.length; i++) {
     del_button[i].onclick = function () {
       this.remove(this.value)

     }
   }
 }

}//class