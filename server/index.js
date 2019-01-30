const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views/"));

//static middlware
app.use(express.static(path.join(__dirname, "../client/dist/")));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./routes/routes")(app);

app.listen(80, () => {
  console.log(`Server listening on port ${80}`);
});
