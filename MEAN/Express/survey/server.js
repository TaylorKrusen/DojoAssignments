// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// post route for adding survey data
app.post('/result', function(req, res) {
 console.log("POST DATA", req.body);
 // this is where we pass the survey data to our html page
    postData = {
        name: req.body.the_name,
        location: req.body.the_location,
        language: req.body.the_language,
        comment: req.body.the_comment
    };
    res.render("survey", {survey_data:postData});
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
