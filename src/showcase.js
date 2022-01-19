import ProductList from './ProductList.mjs'


class Showcase {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

export default class GoodsList extends ProductList {
  constructor(apiHandler, eventEmmiter) {
    super([])
    this.api = apiHandler
    this.eventEmmiter = eventEmmiter
    this.filteredGoods = [];
  }

  fetchGoods(cb) {
    this.api.getCatalog(
      (goods) => {
        this.list = JSON.parse(goods);
        this.filteredGoods = JSON.parse(goods);
        this.eventEmmiter.emit('showcaseFeched', this.list);
        cb()
      },
    )
  }

  render() {
    let listHtml = '';
    this.filteredGoods.forEach(good => {
      const goodItem = new Showcase(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.showcase').innerHTML = listHtml;
  }
  filterGoods(value) {
    const regexp = new RegExp(value, 'i');
    this.filteredGoods = this.list.filter(good => regexp.test(good.title));
    this.render();
  }
}
