var express = require('express');
var app = express();
//get the string as part of the /search path
    app.get('/search', function(req, res) {
        //return the query from the search path
      res.send(req.query);
    });


app.listen(process.argv[2]);