//~~~~Mean_Friends_Express_Server~~~~\\

// start our express sever
var express = require('express');
var app = express();
// require the modules we want to use
var path = require('path');
var bodyParser = require('body-parser');
// we need body parser to grab data out of our JSON objects
app.use(bodyParser.json());

// require js files we need
require("./server/config/mongoose.js")
// store the routes function in a variable
var routes_setter = require("./server/config/routes.js");
// invoke the function in routes_setter and pass it the "app" variable
routes_setter(app);

var PORT = 8000;

app.use(express.static(path.join(__dirname, "./client")))
app.use(express.static(path.join(__dirname, "./node_modules")))


app.listen(PORT, function(){
        console.log(`Arg! Ye ports be listenin ${PORT}`)
})
