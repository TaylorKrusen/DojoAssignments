var mongoose = require('mongoose');
var Message = mongoose.model("Message");
var Comment = mongoose.model("Comment");

module.exports = {
    // CREATE a new comment
    new_comment: function (req, res){
        var the_message_id = req.params.id;
        Message.findOne({_id: the_message_id}, function(err, message){
            // creating a new Comment
            var newComment = new Comment({
                name: req.body.name,
                comment: req.body.the_comment,
            })
            // setting the new comment's connection to our message
            newComment._message = the_message_id;
            // adding that comment to our message's array of comments
            Message.update({_id: the_message_id}, {$push: {"_comments": newComment}}, function(err){multi:true})
            newComment.save(function(err) {
                if(err){
                    console.log(err);
                    res.render ('index', {errors: newComment.errors})
                } else {
                    console.log("added a message comment")
                    res.redirect('/')
                }
            })
        })
    }
};
