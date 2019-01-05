const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
let app = express();
let logger = require("./controllers/logController");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views/"));

app.use(express.static(__dirname + "/public/"));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./routes.js")(app);

app.listen(3000, () => {
  console.log(`Server listening on port ${3000}`);
});
