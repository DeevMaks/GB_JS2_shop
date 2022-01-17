import CartModel from "../src/CartModel.mjs";
import EventEmitter from "../src/EventEmitter.mjs";
import MockApi from "../src/MockApi.mjs";

const model = new CartModel(new MockApi(), new EventEmitter());
console.log(model)

describe('CartModel.fetch', () => {
  it('получение данных', () => {
    model.fetch()
    expect(model.list.length).toBeGreaterThan(0);
  })
});

describe('CartModel.fetch', () => {
  it('добавление данных', () => {
    let goods = model.list.length;
    model.add()
    expect(model.list.length).toBe(goods+1);
  })
});

describe('CartModel.fetch', () => {
  it('удаление данных', () => {
    model.remove()
    expect(model.list.length).toBeGreaterThan(0);
  })
});
