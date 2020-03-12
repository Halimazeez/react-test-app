import Capitalize from "./Capitalize";
import Reverse from "./Reverse";
import Spacer from "./Spacer";

const driversList = {
  cap: Capitalize,
  rev: Reverse,
  spo: Spacer
};

class Driver {
  constructor(drivers) {
    this.drivers = [];

    drivers.forEach(driver => {
      if (driver in driversList) {
        this.drivers.push(new driversList[driver]());
      }
    });
  }

  affect(text) {
    let result = text;
    this.drivers.forEach(driver => {
      result = driver.affect(result);
      // driver.count();
    });
    console.log(this.drivers);
    return result;
  }
}

const driver = new Driver(["cap", "rev", "spo"]);

export default driver;
