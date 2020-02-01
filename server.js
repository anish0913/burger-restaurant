// Express & Body
var express = require("express");
var bodyParser = require("body-parser");

// Server and express
var PORT = process.env.PORT || 3000;
var app = express();

// Static content 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Importing routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});