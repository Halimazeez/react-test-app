import LMS_SABA from "./Drivers/Saba";
// import LMS_ABSORB from "./Drivers/Absorb";
// import LMS_MINDFLASH from "./Drivers/Mindflash";

const propelDrivers = {
  SABA: LMS_SABA
  // ABSORB: LMS_ABSORB,
  // MINDFLASH: LMS_MINDFLASH
};

class DriverManager {
  constructor() {
    this.drivers = [];

    console.group("Supported Propel Drivers:");
    Object.keys(propelDrivers).forEach(driver => {
      console.log("Driver: ", driver);
    });
    console.groupEnd();
  }

  getDrivers() {
    return this.drivers;
  }

  setIntegrations(drivers) {
    drivers.forEach(driver => {
      if (driver.integration_name in propelDrivers) {
        this.drivers.push(new propelDrivers[driver.integration_name](driver.integration_name));
      }
    });
  }
}

const driverManager = new DriverManager();

export default driverManager;
