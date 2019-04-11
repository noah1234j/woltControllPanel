//Controllers
let hyperdeckController = require("../controllers/hyperdeckController");
let projectorController = require("../controllers/projectorController");
let screenController = require("../controllers/screenController");
let streamController = require("../controllers/streamController");

module.exports = function(app) {
  //Main Page
  app.get("/", (req, res) => {
    res.render("index");
    console.log("Rendering");
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
    console.log('stream endpoint')
    streamController(req, res)
  })
};
