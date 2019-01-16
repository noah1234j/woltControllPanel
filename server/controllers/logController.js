const fs = require("fs");
const date = require("date-and-time");

module.exports = (message, path = "/logs/debug.log") => {
  let now = new Date();
  let dateTime = date.format(now, "YYYY-MM-DD HH:mm:ss");
  fs.writeFile(path, `${dateTime} ${message}\r\n`, err => {
    if (err) {
      return console.log(err);
    }

    console.log(message);
  });
};
