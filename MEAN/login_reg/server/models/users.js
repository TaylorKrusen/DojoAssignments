var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type:String,
        required:[true, 'you need to give us your name you bacon thief'],
        minlength: 3,
        trim: true,
    },
    password: {type:String, required:true}
})

mongoose.model('User', UserSchema);
