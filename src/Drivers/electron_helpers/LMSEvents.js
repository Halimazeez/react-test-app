// import store from "core/app/redux/store";
// import Drivers from "drivers";
// import drivers from "../lms-drivers/Drivers";

import driverManager from "propel-drivers";

import { Plugins } from "@capacitor/core";
const { Device } = Plugins;

class LMSEvents {
  constructor() {
    this.electron = false;
    this.listeners();
    this.token = null;
    this.data = null;
  }

  platform = async () => {
    const info = await Device.getInfo();
    if (info.platform === "electron") {
      this.electron = true;
    }
    return info.platform;
  };

  async listeners() {
    await this.platform();
    if (this.electron) {
      const { ipcRenderer } = window.require("electron");

      ipcRenderer.on("login-listener", (event, token) => {
        console.log(token);
        // Drivers.setIntegrations(store.getState().me.data.integrations);
        // Drivers.getDrivers()[0].getToken(token.split("::")[2]);
        // this.token = token.split("::")[2];
        // console.log(Drivers.getDrivers());

        driverManager.setIntegrations([
          {
            descr: "SABA for tenant",
            integration_name: "SABA",
            config: {
              url: "https://shire.sabanow.net"
            },
            integration_id: "a0c67688-7a2c-4e0d-938d-6edc485f03eb",
            instance_id: "12d5675a-f2b8-4ca5-8f8d-05d0f016cea8"
          }
        ]);

        driverManager
          .getDrivers()[0]
          .getToken(
            "31373066316631326339335E235E6368626F6F74682D635E235E53616261536974655E235E656E5F55535E235E536162615E235E696E7465726E616C5E235E24414240302C0214704BECF3F2462D5EF4AA88E070BB0181DFF5CB9702142CB12ABBDCE200D01A25EFED978D3BA344AA0A0E"
          );
        this.token =
          "31373066316631326339335E235E6368626F6F74682D635E235E53616261536974655E235E656E5F55535E235E536162615E235E696E7465726E616C5E235E24414240302C0214704BECF3F2462D5EF4AA88E070BB0181DFF5CB9702142CB12ABBDCE200D01A25EFED978D3BA344AA0A0E";
      });

      ipcRenderer.on("get-listener", (event, url, data) => {
        console.log(url, data);
        this.data = data;
      });

      ipcRenderer.on("post-listener", (event, url, data) => {
        console.log(url, data);
        this.data = data;
      });

      ipcRenderer.on("put-listener", (event, url, data) => {
        console.log(url, data);
        this.data = data;
      });

      ipcRenderer.on("delete-listener", (event, url, data) => {
        console.log(url, data);
        this.data = data;
      });
    }
    return true;
  }
}

const lmsEvents = new LMSEvents();

export default lmsEvents;
