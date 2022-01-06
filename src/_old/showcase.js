const $showcase = document.querySelector(".showcase");
const $cart = document.querySelector(".cart");

const renderGoodsItem = ({ title, price, id }, classType) => {
  let btn = `<button id='${id}' class = 'addBtn'>Add to cart</button></div>`;
  if (classType == "cart") {
    btn = `<button id='${id}' class = 'remBtn'>Remove Item</button></div>`;
  }

  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p>` + btn;
};

const renderGoodsList = (list, listType) => {
  let goodsList = list
    .map((item) => {
      return renderGoodsItem(item, listType);
    })
    .join("");

  if (listType == "showcase") {
    $showcase.innerHTML = "";
    $showcase.insertAdjacentHTML("beforeend", goodsList);
  } else {
    $cart.innerHTML = "Cart";
    $cart.insertAdjacentHTML("beforeend", goodsList);
  }
};

export default renderGoodsList;
