var express = require('express')
var path = require('path')

var app = express()

var PORT = 8000

//-------- You shouldn't need to use session variables------//
// // new code:
// var session = require('express-session');
// // original code:
// var app = express();
// // more new code:
// app.use(session({secret: 'codingdojorocks'}));  // string for encryption
//-----------------------------------------------------//


//------------You will use below for collecting form data----------//
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
//----------------------------------------------------//


app.use(express.static(path.join(__dirname, "./client")))
app.use(express.static(path.join(__dirname, "./node_modules")))
app.use(express.static(path.join(__dirname, "./body-parser")))

app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs")

app.get("/", function(request, response){

    response.render("index", breakfast = ['bacon', 'eggs', 'yogurt'])
})
// route to process new user form data:
app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)
     //code to add user to db goes here!
     // redirect the user back to the root route.
     res.redirect('/')
})
app.get('/users/:id', function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is useable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});

//------------------SESSION: you shouldn't need me-------//
// app.post('/users', function (req, res){
//     // set the name property of session.
//     req.session.name = req.body.name;
//     console.log(req.session.name);
//     //code to add user to db goes here!
//     // redirect the user back to the root route.
//     res.redirect('/');
// });
//---------------------------------------//

app.listen(PORT, function(){
        console.log(`listening on port ${PORT}`)
})
