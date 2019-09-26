const gpio = require("onoff").Gpio;
const down = new gpio(14, "low");
const up = new gpio(15, "low");
const fs = require("fs");
let jsonHelper = require('/var/www/html/jsonhelper.js')
let json = new jsonHelper
let status = require('/var/www/html/screen_model/status.json')
let statusFile = '/var/www/html/screen_model/status.json'
let on = 0;
let off = 1;
let upTime = 40;
let downTime = 30.4;

class screenController {
  async up() {
    up.writeSync(off);
    down.writeSync(off);

    up.writeSync(on);

    setTimeout(() => {
      up.writeSync(off);
      changeStatus('UP')
    }, upTime * 1000);

    changeStatus('MOVING UP')
    return "MOVING UP";
  }

  async down() {
    up.writeSync(off);
    down.writeSync(off);

    down.writeSync(on);

    setTimeout(() => {
      down.writeSync(off);
      changeStatus('DOWN')
    }, downTime * 1000);

    changeStatus('MOVING DOWN')
    return "MOVING DOWN";
  }

  async stop() {
    up.writeSync(off);
    down.writeSync(off);

    changeStatus("MANUALLY STOPPED")
    return "MANUALLY STOPPED";
  }
}

function changeStatus(state) {
  status.screen = state
  console.log(status)

  json.write(statusFile, status)
}


module.exports = screenController;
