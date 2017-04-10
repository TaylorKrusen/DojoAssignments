var mongoose = require('mongoose');
var Task = mongoose.model('Task');
var User = mongoose.model('User');

module.exports = (function(){
    return {
        index: function(req, res){
            console.log(req.session.user._id)
            Task.find({_user:req.session.user._id}, function(err, tasks){
                if (err){
                    res.send(err);
                } else {
                    res.json(tasks)
                }
            })
        },
        add_task: function(req, res) {
            var user_id = req.session.user._id;
            var newTask = new Task({
                task:req.body.task,
                info:req.body.info,
                date:new Date(req.body.date)
            });
            newTask._user = user_id;
            newTask.save(function (err, task) {
                if (err) {
                    res.send(err);
                } else {
                    console.log(task)
                    User.update({_id:user_id}, {$push:{'tasks': task}}, function(err){})
                    console.log('user updated')
                }
                res.json(task);
            });
        }
    }
})()
