export default class ProductList {
  constructor(list, listType, btnAction) {
    this.list = list;
    this.listType = listType;
    this.isVisible = false;
    this.btnAction = btnAction;
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
      Vue.component(this.listType, {
        props: ["goods"],
        template: `
          <div class="${this.listType}">
            <h2>${this.listType}</h2>
            <goods-item v-for="good in goods" :key="good.id" :good="good"></goods-item>
          </div>`,
      });

      Vue.component("goods-item", {
        props: ["good"],
        template: `
          <div class="goods-item">
            <h3>{{ good.title }}</h3>
            <p>{{ good.price }}</p>
            <button :id="good.id">${this.btnAction}</button></div>
          </div>
        `,
      });

      let listDiv = document.querySelector("#" + this.listType + "-wrapper");
      listDiv.innerHTML = "";
      listDiv.insertAdjacentHTML(
        "beforeend",
        `<${this.listType} :goods='list'></${this.listType}>`
      );

      new Vue({
        el: "#" + this.listType + "-wrapper",
        data: { list: this.list },
      });

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
