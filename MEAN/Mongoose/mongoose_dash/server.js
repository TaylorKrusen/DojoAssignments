// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));

var mongoose = require('mongoose');
// connecting mongoose. new db will be created if referenced one doesnt exist
mongoose.connect('mongodb://localhost/wisdom_dash');
mongoose.Promise = global.Promise;

var WisdomSchema = new mongoose.Schema({
    name: String,
    wisdom_text: String,
    bees: Number
})
mongoose.model('Wisdom', WisdomSchema); // We are setting this Schema in our Models as 'Wisdom'
var Wisdom = mongoose.model('Wisdom') // We are retrieving this Schema from our Models named 'Wisdom'

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    Wisdom.find({}, function(err, wisdoms) {
      if (err) {
          console.log(err);
      }
      res.render('index', {wisdom_info: wisdoms});
    })
})

// CREATE
app.get('/wisdom/new', function (req, res){

    res.render("add");
})

// post route for adding a wisdom
app.post('/wisdom', function(req, res) {
    console.log("POST DATA", req.body);
    Wisdom.create(req.body, function(err, result) {
        if(err) {
            console.log(err);
        } else {
            console.log('successfully shared a wisdom!');
            res.redirect('/');
        }
    })
})

app.get('/edit/:id/', function(req, res){
    Wisdom.find({ _id: req.params.id }, function(err, response) {
        if (err) { console.log(err); }
        res.render('edit', { wisdom: response[0] });
    })
});

// update post processing
app.post('/update/:id', function(req, res){
  Wisdom.update({ _id: req.params.id }, req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});

app.post('/wisdom/:id', function (req, res){
  // code to add user to db goes here!
  // redirect the user back to the root route.
  // All we do is specify the URL we want to go to:
  res.redirect('/');
})

app.post('/destroy/:id', function (req, res){
    Wisdom.remove({ _id: req.params.id }, function(err, result){
        if (err) { console.log(err); }
        res.redirect('/');
    });
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
