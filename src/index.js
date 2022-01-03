import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import "./style/style.scss";
import { send } from "./utils.js";

const API_URL = "http://localhost:3000/api";

let productList = [];
let cart = [];

function addGoodToCart(id) {
  let wasBought = productList.find((product) => product.id === Number(id));
  send(
    (error) => {
      console.log(err);
    },
    (res) => {
      cart.push(wasBought);
      renderGoodsList(cart, "cart");
      let removeBtn = document.querySelectorAll(".remBtn");
      removeBtn.forEach((btn) => {
        btn.addEventListener("click", function (event) {
          removeGoodFromCart(event.target);
        });
      });
    },
    `${API_URL}/cart/add`,
    "POST",
    JSON.stringify(wasBought),
    { "Content-Type": "application/json" }
  );
}

function removeGoodFromCart(button) {
  let wasBought = productList.find(
    (product) => product.id === Number(button.getAttribute("id"))
  );
  send(
    (error) => {
      console.log(err);
    },
    (res) => {
      cart = cart.filter(
        (item) => item.id !== Number(button.getAttribute("id"))
      );
      document.querySelector(".cart").removeChild(button.parentNode);
    },
    `${API_URL}/cart/remove`,
    "POST",
    JSON.stringify(wasBought),
    { "Content-Type": "application/json" }
  );
}

send(
  (error) => {
    console.log(err);
  },
  (res) => {
    productList = JSON.parse(res);
    renderGoodsList(productList, "showcase");
    let productBtn = document.querySelectorAll(".addBtn");
    productBtn.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        addGoodToCart(event.target.getAttribute("id"));
      });
    });
  },
  `${API_URL}/catalog`
);

send(
  (error) => {
    console.log(err);
  },
  (res) => {
    cart = JSON.parse(res);
    renderGoodsList(cart, "cart");
    let removeBtn = document.querySelectorAll(".remBtn");
    removeBtn.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        removeGoodFromCart(event.target);
      });
    });
  },
  `${API_URL}/cart/add`
);
