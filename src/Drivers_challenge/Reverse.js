import BaseDriver from "./BaseDriver";

class Reverse extends BaseDriver {
  constructor() {
    super();
  }

  affect(text) {
    // this.count = 1;
    return text
      .split("")
      .reverse()
      .join("");
  }
}

export default Reverse;
