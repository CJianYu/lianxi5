class Base {
  constructor() {
    this.events = {}
  }
  // 这样写只能传一次callback，虽然是能通过的
  // on(event, callback) {
  //   this.events[event] = callback.bind(this)
  // }
  // trigger(event, ...args) {
  //   if(this.events[event]) {
  //     this.events[event](...args)
  //   }
  // }
  on(event, callback) {
    (this.events[event] = this.events[event] || []).push(callback)
  }
  trigger(event, ...args) {
    (this.events[event]).forEach(element => {
      element.apply(this, args)
    });
  }
}

module.exports = Base