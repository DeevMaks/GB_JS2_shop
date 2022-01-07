import { send } from './utils.js'
import {get_server_cart} from "./index";

const API_URL = 'http://localhost:3000/api/ver1'

const $showcase = document.querySelector('.showcase');

const renderGoodsItem = ({ id, title, price }) => {
    return `<tr>            
            <th scope="row">${id}</th>
            <td>${title}</td>
            <td>${price}</td>
            <td><button id="buy_b" type="submit" class="btn btn-success" value='{"id":${id},"title":"${title}","price":${price}}'>Купить</button></td>
            </tr>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(
          (item) =>  {
              return renderGoodsItem(item)
          }
      ).join('');

  $showcase.insertAdjacentHTML('beforeend', goodsList);


}
export default renderGoodsList

export const buy = () => {
    let buy_button = document.querySelectorAll('#buy_b')
    for (var i = 0; i < buy_button.length; i++){
        buy_button[i].onclick = function () {
            console.log("func_buy")
            send((error) => {console.log(err); }, (res) => {}, `${API_URL}/cart`, 'POST', this.value, { "Content-Type": "application/json" });
            get_server_cart();
            location.reload();

        }
    }
}

