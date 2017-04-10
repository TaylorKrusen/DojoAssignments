var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema ({
    text: {type:String, required:true, minlength:2},
    name: {type:String},
    _user:{type: String, ref:'User'},
    // _comments:[{type: Schema.Types.ObjectId, ref= 'Comment'}]
}, {timestamp: true})

mongoose.model('Post', PostSchema);
