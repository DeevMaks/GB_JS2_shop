import ProductList from './ProductList'

export default class ShowcaseModel extends ProductList{
  constructor(apiHandler, eventEmiter, cart) {
    super([])
    this.api = apiHandler
    this.cart = cart
    this.eventEmmiter = eventEmiter
  }

  // получение всех товаров
  fetch(onError) {
    this.api.getCatalog(
      (data) => { 
        this.list = JSON.parse(data)
        this.eventEmmiter.emit('showcaseFeched', this.list)
        //отрисовываем
        this.render(this.list)
      },
      onError
    )
  }

  //покупка
  buy(id, onError) {
    console.log("call buy", id)
    const product = this.find(id)
    //console.log(product)
    if(product) this.cart.add(product, onError)
  }

  //отображение товаров на странице
  render(list) {
    const showcase = document.querySelector('.showcase');

    let goodsList = list.map(
          (item) =>  {
            return this.renderGoodsItem(item)
          }
      ).join('');

    showcase.insertAdjacentHTML('beforeend', goodsList);
    this.show_button_buy()
  }

  renderGoodsItem ({id, title, price}) {
    return `<tr>            
            <th scope="row">${id}</th>
            <td>${title}</td>
            <td>${price}</td>
            <td><button id="buy_b" type="submit" class="btn btn-success" value='${id}'>Купить</button></td>
            </tr>`;
  };

  //функция конопок buy
  show_button_buy () {
      let buy_button = document.querySelectorAll('#buy_b')
      for (var i = 0; i < buy_button.length; i++) {
        buy_button[i].onclick = function () {
        //console.log("func_buy", typeof (this.value))
        // не работает
          this.buy(this.value)

        }
      }

  }


}