import BaseDriver from "./BaseDriver";

class Spacer extends BaseDriver {
  constructor() {
    super();
  }

  affect(text) {
    // this.count = 1;
    return text.split("").join("_");
  }
}

export default Spacer;
