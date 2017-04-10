var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var User = mongoose.model('User')

module.exports = (function(){
    return {
        setWall: function(req, res) {
            Post.find({}, function(err, posts){
                if(err){
                    res.send(err);
                } else {
                    res.json(posts)
                }
            })
        },
        new_post: function(req, res){
            var user_id = req.session.user._id;
            var newPost = new Post({
                text:req.body.text,
                name: req.session.user.name,
            });
            newPost._user = user_id;
            newPost.save(function(err, post){
                if (err) {
                    res.send(err);
                }
                res.json(post);
            });

        },
    }
})()
