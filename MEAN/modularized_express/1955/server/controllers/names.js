var mongoose = require('mongoose');
var Name = mongoose.model('Name');


module.exports = {
    // index should display all names in collection
    index: function(req, res) {
        Name.find({}, function(err, all_names) {
            if(err) {
                console.log(err);
            } else {
                res.json(all_names);
            }
        })
    },
    // create should add new names to our collection
    create: function(req, res){
        var name = new Name({name:req.params.name});
        name.save(function(err, results){
            if(err){
                console.log("broke on create method in routes")
            } else {
                console.log("added a name to collection: " + name.name)
                res.redirect('/')
            }
        })
    },
    destroy: function(req, res){
    // should delete name from collection
        Name.remove({name:req.params.name},function(err,results){
            if(err){
                console.log("something went wrong")
            } else {
                console.log("deleted a name")
                res.redirect('/')
            }
        })
    },
    show: function(req, res){
    // should show a specific name from collection
        Name.find({name:req.params.name},function(err, the_name){
            if(err){
                console.log("couldn't find name. check for typos")
            } else {
                console.log("showed the right name from db")
                res.json(the_name)
            }
        })
    }
}
