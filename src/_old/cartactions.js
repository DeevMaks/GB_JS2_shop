import { productList } from "../index.js";

function addGoodToCart(id) {
  let wasBought = productList.find((product) => product.id === Number(id));
  send(
    (error) => {
      console.log(err);
    },
    (res) => {
      cart.push(wasBought);
    },
    `${API_URL}/cart`,
    "POST",
    JSON.stringify(wasBought),
    { "Content-Type": "application/json" }
  );
}

// removeGoodFromCart() {

// }

export default addGoodToCart;
