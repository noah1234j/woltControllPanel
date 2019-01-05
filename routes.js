let hyperdeckController = require("./controllers/hyperdeckController");
let projectorController = require("./controllers/projectorController");

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

  app.post("/api/projector/", (req, res) => {
    projectorController(req, res);
  });
};
