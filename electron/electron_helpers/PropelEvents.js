const { ipcMain } = require("electron");
const propel = require("./index");

class PropelEvents {
  constructor() {
    this.listeners();
  }

  listeners() {
    ipcMain.on("echo-emit", (event, value) => {
      console.log("echo", value);
    });

    ipcMain.on("browse_url-emit", (event, url) => {
      console.log("browse", url);
    });

    ipcMain.on("login-emit", (event, url, callback_scheme) => {
      console.log("login", url, callback_scheme);
      propel.login(url, callback_scheme, event);
    });

    ipcMain.on("get-emit", (event, url, params) => {
      console.log("get", url, params);
      propel.get(url, params, event);
    });

    ipcMain.on("post-emit", (event, url, data, params) => {
      console.log("post", url, data, params);
      propel.post(url, data, params, event);
    });

    ipcMain.on("put-emit", (event, url, data, params) => {
      console.log("put", url, data, params);
      propel.put(url, data, params, event);
    });

    ipcMain.on("delete-emit", (event, url, params) => {
      console.log("delete", url, params);
      propel.delete(url, params, event);
    });

    ipcMain.on("close-window", event => {
      propel.close();
    });
  }
}

const propelEvents = new PropelEvents();

module.exports = propelEvents;
