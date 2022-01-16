import CartModel from "../src/CartModel";
import EventEmitter from "../src/EventEmitter";
import MockApi from "../src/MockApi";
const model = new CartModel(new MockApi(), new EventEmitter());
console.log(model)
describe('CartModel.fetch', () => {
  it('получение данных', () => {
    model.fetch()
    expect(model.list.length).toBeGreaterThan(0);
  })
});

describe('CartModel.add', () => {
  it('добавление товара', () => {
    model.add()
    expect(model.list.length).toBeGreaterThan(0);
  })
});

describe('CartModel.remove', () => {
  it('удаление товара', () => {
    model.remove()
    expect(model.list.length).toBeGreaterThan(0);
  })
}); 
