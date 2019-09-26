//Someone already build me a library WOOT WOOT
let hyperdeckLib = require("hyperdeck-js-lib");
let settings = require("../../settings.json");
let logger = require("../../controllers/logController");
let JSONHelper = require('../../helpers/jsonhelper.js');
let status = require("./status.json");
let statusFile = "./status.json";
let json = new JSONHelper;
function log(message) {
  logger(message, "../../logs/debug.log");
}

class HyperdeckController {
  connect() {
    this.hyperdeck = new hyperdeckLib.Hyperdeck(settings.hyperdeck.host);
    return this.hyperdeck.onConnected().then(() => {
      return "connected";
    });
  }

  customRequest(req) {
    return this.hyperdeck.makeRequest(req).then(res => {
      if (res.code == 200) {
        res.message = "Your Custom Request Was Successful";
      } else {
        res.message = "Could Not Fulfill Custom Request";
      }
      return res;
    });
  }

  record() {
      return this.hyperdeck.record().then(res => {
        if (res.code == 200) {
          res.message = "Successfully Started Video Recording";
          status.hyperdeck = "RECORDING"
          json.write(statusFile, status)
        } else {
          res.message = "Could Not Start Video Recording";
        }
        return res;
      })
  }

  stop() {
    return this.hyperdeck.stop().then(res => {
      if (res.code == 200) {
        res.message = "Successfully Stopped Video Recording";
        status.hyperdeck = "STOPPED"
        json.write(statusFile, status)
      } else {
        res.message = "Could Not Stop Video Recording";
      }
      return res;
    });
  }

  kill() {
    return this.hyperdeck.makeRequest("quit").then(res => {
      res.message = "Successfully Closed Connection to Hyperdeck Mini"
      return res;
    });
  }

  errHandle(errResponse) {
    if (!errResponse) {
      log("The request failed because the hyperdeck connection was lost.");
    } else {
      log(
        `The hyperdeck returned an error with status code ${errResponse.code}.`
      );

      log(errResponse);
    }
  }

  asyncMessages() {
    //all async messages
    this.hyperdeck.getNotifier().on("asynchronousEvent", function(response) {
      log("Got an asynchronous event with code " + response.code + ".");
      log(response);
    });

    //async connection lost
    this.hyperdeck.getNotifier().on("connectionLost", function() {
      log(error("Connection lost."));
    });
  }
}

module.exports = HyperdeckController;
