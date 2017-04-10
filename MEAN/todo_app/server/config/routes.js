var usr_control = require('./../controllers/usr_control.js');
var todo_control = require('./../controllers/todo_control.js')

module.exports = function(app) {
    app.post('/login', function(req, res){
        usr_control.login(req, res);
    })
    app.get('/checkstatus', function(req,res){
        usr_control.checkStatus(req, res);
    });
    app.get('/logout', function(req,res){
        usr_control.logout(req, res);
    });
    app.get('/index', function(req,res){
        todo_control.index(req, res);
    });
    app.post('/create', function(req,res){
        todo_control.add_task(req, res);
    });
}
