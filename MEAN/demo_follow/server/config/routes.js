var session = require('./../controllers/session.js');
module.exports = function(app){
    app.post('/login', function(req,res){
        session.login(req, res)
    })

    app.get('/getuser', function(req,res){
        session.getUser(req,res)
    })

    app.get('/logout', function(req,res){
        session.logOut(req,res)
    })
}
