export default class Stack<T = any> extends Array<T> {
  back() {
    return this.slice(-1)[0];
  }

  clear() {
    while (this.length) {
      this.pop();
    }
  }

  empty() {
    return this.length === 0;
  }
}
