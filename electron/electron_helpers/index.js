const { BrowserWindow, ipcMain } = require("electron");
const axios = require("axios");

class Propel {
  constructor() {
    this.newWindow = null;
    this.event = null;
    this.token = null;
  }

  async login(url, callback_scheme, event) {
    this.event = event;
    this.newWindow = new BrowserWindow({
      height: 920,
      width: 1600,
      show: true,
      webPreferences: {
        webSecurity: false,
        allowRunningInsecureContent: true
      }
    });

    this.newWindow.loadURL(url);

    this.newWindow.webContents.on("did-finish-load", () => {
      this.event.reply("login-listener", url);

      this.newWindow.webContents.on("did-redirect-navigation", (event, url) => {
        if (url.includes(callback_scheme) && url !== this.token) {
          this.token = url;
          this.event.reply("login-listener", url);
          this.newWindow.hide();
          return;
        }
      });
    });
  }

  close() {
    this.newWindow.close();
  }

  get(url, params, event) {
    this.event = event;
    axios
      .get(url, { headers: params })
      .then(res => {
        this.event.reply("get-listener", url, res);
      })
      .catch(e => {
        this.event.reply("get-listener", url, e);
      });
  }

  post(url, data, params, event) {
    this.event = event;
    axios
      .post(url, data, { headers: params })
      .then(res => {
        this.event.reply("post-listener", url, res);
      })
      .catch(e => {
        this.event.reply("post-listener", url, e);
      });
  }

  put(url, data, params, event) {
    this.event = event;
    axios
      .put(url, data, { headers: params })
      .then(res => {
        this.event.reply("put-listener", url, res);
      })
      .catch(e => {
        this.event.reply("put-listener", url, e);
      });
  }

  delete(url, params, event) {
    this.event = event;
    axios
      .delete(url, { headers: params })
      .then(res => {
        this.event.reply("delete-listener", url, res);
      })
      .catch(e => {
        this.event.reply("delete-listener", url, e);
      });
  }
}

const propel = new Propel();

module.exports = propel;
