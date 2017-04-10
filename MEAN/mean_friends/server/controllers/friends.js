//~~~~Controller(server)::::js/controllers/friendsController.js~~~~\\

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
    index: _index,
    create: _create,
    update: _update,
    delete: _delete,
    show: _show
};

function _index(req, res) {
    Friend.find({}, function (err, friend) {
        if (err) {
            console.log(err);
        } else {
            res.json(friend);
        }
    });
}

function _create(req, res) {
    var friend = new Friend (req.body);
    friend.save(function(err, results) {
        if (err) {
            console.log(err);
        } else {
            console.log('added a friend you social butterfly')
            res.redirect('/');
        }
    });
}

function _update(req,res) {
    var id = req.params.id;
    var data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthday: req.body.birthday
    };

    Friend.findByIdAndUpdate(id, {$set:data}, {new:true}, function(err, friend) {
        if (err) {
            console.log(err)
        } else {
            res.json(friend);
        }
    });
}

function _delete(req, res) {
    Friend.findByIdAndRemove(req.params.id, function(err, results) {
        if (err) {
            console.log(err);
        } else {
            res.json(results)
        }
    });
}

function _show(req, res) {
    var id = req.params.id;

    Friend.findById(id, function(err, friend) {
        if(err){
            console.log(err);
        } else {
            console.log('was this who you wanted?', friend);
            res.json(friend);
        }
    });
}
