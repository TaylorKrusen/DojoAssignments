// we need to create a schema and make a model that we can use in our controller

var mongoose = require('mongoose');
// create a new schema for our object
var NameSchema = new mongoose.Schema({
    name: String,
});

// use our schema to create our new model.
mongoose.model('Name', NameSchema);
