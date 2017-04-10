//~~~~Controller(server)::::js/controllers/friendsController.js~~~~\\

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
    /**
     * Talk to database. Return JSON of all our friends.
     * Call me to refresh the friend JSON object on the client's view
     * @param
     * @return JSON of all Friend objects
     */
    index: function(req,res){
        Friend.find({}, function (err, friend) {
            if (err) {
                console.log(err);
            } else {
                res.json(friend)
            }
        })
    },
    /**
     * CREATE a new friend object
     *
     * @param is a request from 'newFriend' form
     * @return err or redirect with success msg
     */
    create: function(req,res){
        var friend = new Friend (req.body);
        friend.save(function(err, results) {
            if (err) {
                console.log(err)
            } else {
                console.log('added a friend you social butterfly')
                res.redirect('/')
            }
        })
    },
    /**
     * UPDATE a specific friend object
     *
     *
     * @param --> Friend's object ID
     * @returns --> Friend with updated properties
     */
    update: function(req,res){
        Friend.findOne({_id:req.params.id}, function(err, friend){
            if (err){
                console.log(err);
            } else {
                friend.firstName = req.body.firstName;
                friend.lastName = req.body.lastName;
                friend.birthday =req.body.birthday;
                friend.save(function(err, updatedFriend){
                    if (err) {
                        console.log(err);
                    } else {
                        res.json(updatedFriend)
                    }
                })
            }
        })
    },
    /**
     * DELETE a friend object
     *
     * @param --> a friend's object id
     * @returns --> redirect on success or log err
     */
    delete: function(req,res){
        Friend.remove({id:req.params.id}, function(err, results) {
            if(err){
                console.log(err)
            } else {
                console.log('deleted dat friend')
                res.redirect('/')
            }
        })
    },
    /**
     * RETRIEVE a friend object
     *
     * @param --> a friend's object id
     * @returns --> JSON of a specific friend
     */
    show: function(req,res){
        Friend.find({_id:req.params.id},function(err, friend){
            if(err){
                console.log(err)
            } else {
                console.log('was this who you wanted?', friend)
                res.json(friend)
            }
        })
    }
}
