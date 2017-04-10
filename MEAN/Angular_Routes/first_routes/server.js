var express = require('express')
app = express()
var path = require('path')

var app = express()

var PORT = 8000

app.use(express.static(path.join(__dirname, "./client")))
app.use(express.static(path.join(__dirname, "./node_modules")))


app.listen(PORT, function(){
        console.log(`Arg! Ye ports be listenin ${PORT}`)
})
