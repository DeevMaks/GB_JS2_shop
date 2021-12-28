import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import "../public/styles/style.sass";

const productList = getProductList(22);

renderGoodsList(productList);