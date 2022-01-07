import {send} from "./utils";
import {get_server_cart} from "./index";
const API_URL = 'http://localhost:3000/api/ver1'

export function show_button_cart(count, cart) {
        let but = document.createElement('th')
        but.innerHTML = `<button id="b_cart" type="submit" class="btn btn-primary">Корзина ${count} товаров</button>`
        let place = document.querySelector('.ins')
        let place2 = document.querySelector('tr.ins > th:last-child')
        place.removeChild(place2)
        place.append(but)
        let b_cart = place.querySelector('#b_cart')
        b_cart.onclick = function () {opencart(cart);}
}

// создание модального окна
export const opencart = (cart) => {
    let element = document.createElement('div')
    element.className = 'modal_cart'
    element.innerHTML = `'<div class="modal" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Корзина</h4></div><div class="modal-body"><table class="table goods-item"><thead><tr class="ins2"><th scope="col">#</th><th scope="col">Title</th><th scope="col">Price</th><th scope="col"></th></tr></thead><tbody class="showcase_cart"></tbody></table></div><div class="modal-footer"><button id="btn_close" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button></div></div></div></div>'`
    document.body.appendChild(element);
    let btn_close = document.querySelector('#btn_close')
    btn_close.addEventListener('click', close_modal);
    show_cart(cart);
    delete_good();
}

//закрытие модального окна
export const close_modal = () => {
    let modal_close = document.querySelector('.modal_cart')
    document.body.removeChild(modal_close)
    console.log("close")

}

const rendercart = ({id, title, price}) => {

    return `<tr>            
            <th scope="row">${id}</th>
            <td>${title}</td>
            <td>${price}</td>
            <td><button id="del" type="submit" class="btn btn-danger" value='{"id":${id},"title":"${title}","price":${price}}'>Убрать из корзины</button></td>
            </tr>`;
}

//показ содержимого корзины
const show_cart = (cart) => {
    let cart_list = cart.map((item) => {return rendercart(item)}).join('');
    document.querySelector('.showcase_cart').insertAdjacentHTML('beforeend', cart_list)
}

const delete_good = () => {
    let del_button = document.querySelectorAll('#del')
    for (var i = 0; i < del_button.length; i++){
        del_button[i].onclick = function () {
            send((error) => {console.log(err); }, (res) => {}, `${API_URL}/cart`, 'DELETE', this.value, { "Content-Type": "application/json" });
            get_server_cart(true);

        }
    }
}
