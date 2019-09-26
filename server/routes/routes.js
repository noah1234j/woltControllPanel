//Controllers
let hyperdeckController = require("../controllers/hyperdeckController");
let projectorController = require("../controllers/projectorController");
let screenController = require("../controllers/screenController");
let streamController = require("../controllers/streamController");
let airfaderController = require("../controllers/airFaderController");
let status = require("../status.json")

module.exports = function(app) {
  //Main Page
  app.get("/", (req, res) => {
    res.render("index");
  });

  //Status Page
  app.get("/status", (req, res) => {
    res.render("status");
  });

  //Settings
  app.get("/settings", (req, res) => {
    res.send('bob')
    res.render("settings");
  });

  //Hyperdeck
  app.post("/api/hyperdeck/", (req, res) => {
    hyperdeckController(req, res);
  });

  //Projector
  app.post("/api/projector/", (req, res) => {
    projectorController(req, res);
  });

  //Screen
  app.post("/api/screen/", (req, res) => {
    screenController(req, res)
  })

  //Stream
  app.post("/api/stream/", (req, res) => {
    streamController(req, res)
  })

  //AirFader
  app.post("/api/airfader/", (req, res) => {
    airfaderController(req, res)
  })

  //AirFader
  app.post("/status/", (req, res) => {
    res.send(status)
  })

}
