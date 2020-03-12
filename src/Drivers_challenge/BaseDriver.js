class BaseDriver {
  constructor() {
    this._count = 0;
    console.log("Called");
  }

  affect(text) {
    console.log(text);
  }

  hal() {
    this._count += 1;
    return this._count;
  }
}

export default BaseDriver;
