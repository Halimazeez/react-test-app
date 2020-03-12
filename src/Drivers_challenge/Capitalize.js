import BaseDriver from "./BaseDriver";

class Capitalize extends BaseDriver {
  constructor() {
    super();
  }

  count() {
    super.count();
  }

  affect(text) {
    // this.count = 1;
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}

export default Capitalize;
