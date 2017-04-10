var mongoose = require('mongoose');
var User = mongoose.model('User')

module.exports = (function(){
    return {
        login: function(req,res){
            User.findOne({name:req.body.name}, function(err,data){
                if(!data){
                    var user = new User(req.body)
                    user.save()
                    console.log(user, 'user created')
                } else {
                    var user = data
                }
                req.session.user = user
                req.session.user.save()
                console.log(req.session.user)
                return res.json(user)
            })
        },
        getUser: function(req, res){
            if(req.session.user){
                res.json(req.session.user)
            } else {
                res.json(null)
            }
        },
        logOut: function(req, res){
            req.session.destroy()
            res.redirect('/')
        }
    }
})();
