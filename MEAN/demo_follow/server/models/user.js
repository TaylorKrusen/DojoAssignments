var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type:String, required:true, maxlength:30, minlength: 3}
})

mongoose.model('User', UserSchema)
