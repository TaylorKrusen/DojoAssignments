var express = require('express');
var app = express();

var path = require('path');
// var bp = require('body-parser');
// var session = require('express-session')

app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/node_modules')));

app.listen(8000, function(){
    console.log('arg ye ports be open in the 8000 storm')
})
