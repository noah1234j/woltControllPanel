const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

let screenController = require("./screenController");

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/screen", (req, res) => {
  screenController(req, res);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
