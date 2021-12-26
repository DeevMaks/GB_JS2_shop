import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import './styles/style.css'
import './styles/style.scss'

const productList = getProductList(20);

renderGoodsList(productList);