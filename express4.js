var express = require('express');
var app = express();
var bodyparser = require('body-parser');

//use bodyparser to parse the data submitted
app.use(bodyparser.urlencoded({extended: false}));
//take the data from the specified path "/form"  and send it to the callback function
app.post('/form', function(req, res){
//reverse the string submitted to the form
res.end(req.body.str.split('').reverse().join(''));
})
app.listen(process.argv[2]);