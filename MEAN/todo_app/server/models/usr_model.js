var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
    name: {type:String, required:true, minlength:2},
    tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
}, {timestamp: true})

mongoose.model('User', UserSchema);
