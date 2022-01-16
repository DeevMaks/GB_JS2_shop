export default class EventEmitter {
  constructor() {
    this.callbacks = {};
  }

  subscribe(eventName, callback) {
    if (!this.callbacks[eventName]) {
      this.callbacks[eventName] = [];
    }
    this.callbacks[eventName].push(callback);
  }

  emit(eventName) {
    if (this.callbacks[eventName]) {
      this.callbacks[eventName].forEach((callback) => {
        callback();
      });
    }
  }
}
