import Saba from "./Saba";

const driversList = {
  SABA: Saba
};

class Drivers {
  constructor() {
    this.drivers = [];
  }

  setIntegrations(drivers) {
    drivers.forEach(driver => {
      if (driver.integration_name in driversList) {
        this.drivers.push(new driversList[driver.integration_name]());
      }
    });
  }

  getDrivers() {
    return this.drivers;
  }
}

const drivers = new Drivers();

export default drivers;
