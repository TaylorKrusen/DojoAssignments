var messages = require("../controllers/messages.js")
var comments = require("../controllers/comments.js")

module.exports = function(app){
    app.get('/', function(req, res) {
        messages.index(req,res)
    })

    // CREATE a new message
    app.post('/create', function (req, res){
        // pass our form data into our oject
        messages.new_message(req,res)
    })

    // CREATE a new comment
    app.post('/comment/:id', function (req, res){
        comments.new_comment(req,res)
    })

    // DESTROY a message
    app.post('/messages/destroy/:id', function (req, res){
        messages.delete_message(req,res)
    })
}
