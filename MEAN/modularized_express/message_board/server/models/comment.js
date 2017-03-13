var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var CommentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    // telling our comment which message it is attached to.
    _message: {type: Schema.Types.ObjectId, ref: 'Message'}
});
mongoose.model("Comment", CommentSchema);
