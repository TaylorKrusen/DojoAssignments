var express = require('express');
var app = express();

var path = require('path');
var bp = require('body-parser');
var session = require('express-session')

app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/node_modules')));
app.use(session({
    secret: 'bacon cat',
    resave: true,
    saveUninitialized: false,
    cookie: {secure:false}
}))
app.use(bp.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
    console.log('arg ye ports be open in the 8000 storm')
})
