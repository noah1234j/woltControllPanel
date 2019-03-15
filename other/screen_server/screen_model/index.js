const gpio = require("onoff").Gpio;
const down = new gpio(14, "low");
const up = new gpio(15, "low");
const fs = require("fs");
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
    }, upTime * 1000);

    return "MOVING UP";
  }

  async down() {
    up.writeSync(off);
    down.writeSync(off);

    down.writeSync(on);

    setTimeout(() => {
      down.writeSync(off);
    }, downTime * 1000);

    return "MOVING DOWN";
  }

  async stop() {
    up.writeSync(off);
    down.writeSync(off);

    return "MANUALLY STOPPED";
  }
}

module.exports = screenController;
