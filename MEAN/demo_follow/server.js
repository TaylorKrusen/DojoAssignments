var express = require('express');
var app = express();
var path = require('path');
var bp = require('body-parser');
var session = require('express-session')
var mongoose = require('mongoose')

app.use(session({
    secret: 'bacon',
    resave: false,
    saveUninitialized:true,
}))
app.use(express.static(path.join(__dirname, 'client')));
app.use(bp.json());
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(8000, function(){
    console.log('arg! ye ports be listening on 8000')
})
