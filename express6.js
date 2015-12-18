var express = require('express');
var app = express();
var crypto =  require('crypto');
//receive from PUT request the id string
app.put('/message/:id', function(req, res){
//set id variable to the parameter id from the object sent in the PUT request
    var id = req.params.id;
    //create a variable for the hash algorithm
    var shasum = crypto.createHash('sha1');
    //apply crypto hash to the supplied string
    shasum.update(new Date().toDateString() + id);
    //digest string and return in hex
    var d = shasum.digest('hex');
    res.send(d);  
      
      
});
app.listen(process.argv[2]);