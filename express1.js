var express = require('express')
    var app = express()
    //set path to /home as specified
    app.get('/home', function(req, res) {
      //at end of response function return hello world
      res.end('Hello World!')
    })
    //set port to listen to as process.argv[2] as specified
    app.listen(process.argv[2])