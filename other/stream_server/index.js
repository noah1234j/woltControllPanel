///////////////////////// IMPORTS ////////////////////////////
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

let streamController = require("./streamController");

//////////////////////// MIDDLEWARE /////////////////////////
//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/////////////////////// ENDPOINTS //////////////////////////
app.post("/api/stream", (req, res) => {
  streamController(req, res);
  
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
