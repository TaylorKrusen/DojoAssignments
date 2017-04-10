var mongoose = require('mongoose')
var User = mongoose.model('User')
// var bcrypt = require('bcrypt')

module.exports = (function(){
    return {
        login:function(req, res) {
            console.log(req.body)
            User.findOne({name:req.body.name}, function(err,data){
                // bcrypt.gensalt(req.body.password, 8, function(result){
                //     now check it against the database
                // })
                if(!data){
                    var user = new User(req.body)
                    user.save()
                    req.session.user = user
                    req.session.user.save()
                    console.log(req.session.user)
                    return res.json(user)
                } else {
                    if (req.body.password == data.password){
                        console.log('your bacon is correct')
                        var user = data
                        req.session.user = user
                        req.session.user.save()
                        return res.json(user)
                    } else {
                        console.log('nice try poop face')
                        res.redirect('/')
                    }
                }
            });
        },
        checkStatus: function(req,res){
            if(req.session.user){
                res.json(req.session.user)
            } else {
                res.json(null)
            }
        },
        logout: function(req,res){
            req.session.destroy();
            res.redirect('/')
        }
    }
})()
