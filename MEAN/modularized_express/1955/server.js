//we are not rendering any ejs / html page so this server file LEAVES A LOT OUT. Take heed if using this for reference in the future.

// we always start with express
var express = require("express");
// and we create the express app
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

// configuring bodyParser to read JSON
app.use(bodyParser.json());

// we pull in our mongoose file to do the configuration for us
require("./server/config/mongoose.js");

// store routes function as variable
var routes_setter = require("./server/config/routes.js");
// invoke routes function and pass it the 'app' variable
routes_setter(app);

// tell express to listen to the 8000 port
app.listen(8000, function() {
    console.log('Arg! Ye ports be runnin on 8000')
})
