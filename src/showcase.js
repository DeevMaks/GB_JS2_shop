const $showcase = document.querySelector('.showcase');

const renderGoodsItem = ({ title, price }) => {
  return `<div class="goods-item"><h3>${title}</h3><p>${price} $</p></div>`;
};

class renderGoodsItem2 {
  constructor ({ title, price }){
    this.title = title;
    this.price = price;
  }
  render() {
    `<div class='goods-item'>
        <h3>${title}</h3>
        <p>${price} $</p>
    </div> `;
  }
}

class renderGoodsList2 {
  constructor(){
    this.goods = renderGoodsItem2;
  }
  render() {
    const _goods = [...this.goods];
    const _goodsItem =_goods.map((item) => {
      const goodsItem = new renderGoodsItem2(item);
      return goodsItem.render();
    });
    document.querySelector(".goods-list").innerHTML = _goodsItems.join("");
  }
}



const renderGoodsList = (list) => {
  let goodsList = list.map(
          (item) =>  {
              return renderGoodsItem(item)
          }
      ).join('');

  $showcase.insertAdjacentHTML('beforeend', goodsList);
}

onload = () => {
  const goodsList = new renderGoodsList2;
  goodsList.render();
}

class Cart {
  show () {}
  render () {}
}

class CartItem {
  setCount () {}
  deleteItem() {}
  render () {}
}

export default renderGoodsList