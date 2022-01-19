export default class ProductList {
  constructor(list, listType) {
    this.list = list;
    this.listType = listType;
    this.isVisible = false;
  }

  getList() {
    return this.list;
  }

  renderItem({ title, price, id }, classType) {
    let btn = `<button id='${id}'>Add to cart</button></div>`;
    if (classType == "cart") {
      btn = `<button id='${id}'>Remove Item</button></div>`;
    }

    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p>` + btn;
  }

  renderList() {
    if (this.isVisible) {
      let goodsList = this.list
        .map((item) => {
          return this.renderItem(item, this.listType);
        })
        .join("");
      let listDiv = document.querySelector("." + this.listType);
      listDiv.innerHTML = "";
      listDiv.insertAdjacentHTML("beforeend", goodsList);
      document.querySelector("." + this.listType).style.display = "block";
    } else {
      if (this.listType == "catalog")
        document.querySelector("." + this.listType).innerHTML = "Нет товаров";
      else document.querySelector("." + this.listType).style.display = "none";
    }
  }

  addEvent() {
    let productBtn = document
      .querySelector("." + this.listType)
      .querySelectorAll("button");
    productBtn.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        this.listType == "catalog"
          ? this.buy(event.target.getAttribute("id"), (error) =>
              console.log(err)
            )
          : this.remove(event.target.getAttribute("id"), (error) =>
              console.log(err)
            );
      });
    });
  }
}
