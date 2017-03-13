var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    name: {type:String, required:true, minlength:4},
    message: {type:String, required:true},
    // populating comments tied to our message id
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});
mongoose.model("Message", MessageSchema);

var CommentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    // telling our comment which message it is attached to.
    _message: {type: Schema.Types.ObjectId, ref: 'Message'}
});
mongoose.model("Comment", CommentSchema);
