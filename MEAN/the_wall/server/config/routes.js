// require the controllers you need to pass info through
var usr_control = require('./../controllers/usr_control.js');
var post_control = require('./../controllers/post_control.js')

module.exports = function(app){
    app.post('/login', function(req, res){
        usr_control.login(req, res);
    });
    app.get('/logout', function(req,res){
        usr_control.logout(req, res);
    });
    app.get('/checkstatus', function(req,res){
        usr_control.checkStatus(req, res);
    });
    app.post('/addPost', function(req,res){
        post_control.new_post(req, res);
    });
    app.get('/dash', function(req,res){
        post_control.setWall(req, res);
    });
}
