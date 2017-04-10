// we need to create a schema and make a model that we can use in our controller

var mongoose = require('mongoose');
// create a new schema for our object
var NameSchema = new mongoose.Schema({
    firstName: {type: String,required:true, minlength:3},
    lastName: {type: String,required:true, minlength:3},
    birthday:{type: Date, required: true},
});

// use our schema to create our new model.
mongoose.model('Friend', FriendSchema);
