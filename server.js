// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

var PORT = 3003
var mongoose = require("mongoose")
var routes = require("./routes");

// Initialize Express
var app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static("public"));


app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.use(routes);


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraper"

mongoose.connect(MONGODB_URI);




// Listen on port 3000
app.listen(PORT, function() {
  console.log("App running on port " + PORT);
});
