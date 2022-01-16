import CartModel from "../src/CartModel.mjs";
import EventEmitter from "../src/EventEmitter.mjs";
import MockApi from "../src/MockApi.mjs";

const model = new CartModel(new MockApi("../spec"), new EventEmitter());

describe("CartModel.fetch", () => {
  it("получение данных", () => {
    model.fetch();
    expect(model.list.length).toBeGreaterThan(0);
  });
});

describe("CartModel.add", () => {
  let lengthBefore = 0;
  beforeEach(() => {
    lengthBefore = model.list.length;
  });
  it("Сравнение длины корзины до и после add()", () => {
    model.add({ id: 10, title: "Shirt red", price: 678 });
    expect(model.list.length).toBe(lengthBefore + 1);
  });
});

describe("CartModel.remove", () => {
  let lengthBefore = 0;
  beforeEach(() => {
    model.fetch();
    lengthBefore = model.list.length;
  });
  it("Сравнение длины корзины до и после remove()", () => {
    model.remove(10);
    expect(model.list.length).toBe(lengthBefore - 1);
  });
});
