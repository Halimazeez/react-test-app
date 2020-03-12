import BaseDriver from "../BaseDriver";

class LMS_SABA extends BaseDriver {
  constructor(driverName) {
    super(driverName);
    this.friendlyName = driverName;
    this.instantiated_at_date = new Date().toLocaleTimeString();
  }

  getCurrentLearning() {
    console.log("Get learning");
  }

  getToken(token) {
    console.log("Gotta token from saba, ", token);
  }
}

export default LMS_SABA;
