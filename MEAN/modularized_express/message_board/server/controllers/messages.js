var mongoose = require('mongoose');
var Message = mongoose.model("Message");


module.exports = {
    index: function(req, res){
        Message.find({}).populate('_comments').exec(function(err, messages){
            res.render('index', {messages:messages})
        })
    },
    // CREATE a new message
    new_message: function (req, res){
        // pass our form data into our oject
        var newMessage = new Message({
            name: req.body.name,
            message: req.body.the_message
        })
        // save our object unless there is an error
        newMessage.save(function(err){
            if(err){
                console.log(err);
                res.render('index', {errors: newMessage.errors});
            } else {
                console.log("success");
                res.redirect('/');
            }
        })
    },
    // DESTROY a message
    delete_message: function (req, res){
        Message.remove({ _id: req.params.id }, function(err, result){
            if (err) { console.log(err); }
            res.redirect('/');
        });
    }
};
