var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema ({
    task: {type:String, required:true, minlength:2},
    info: {type:String, required:true},
    date: {type:Date, required:true},
    _user:{type: String, ref:'User'}
}, {timestamp: true})

mongoose.model('Task', TaskSchema);
