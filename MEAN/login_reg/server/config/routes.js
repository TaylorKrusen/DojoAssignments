var user = require('./../controllers/session.js')

module.exports = function(app) {
    app.post('/login', function(req,res){
        user.login(req, res);
    });
    app.get('/checkstatus', function(req,res){
        user.checkStatus(req, res);
    });
    app.get('/logout', function(req,res){
        user.logout(req, res);
    });
}
