class BaseDriver {
  constructor(driverName) {
    this.friendlyName = null;
    this.instantiated_at_date = null;
    console.log("Super Driver Instantiated, sub driver: ", driverName);
  }

  getCurrentLearning() {
    console.error("Feature not supported");
  }

  getToken() {
    console.error("Feature not supported");
  }
}

export default BaseDriver;
