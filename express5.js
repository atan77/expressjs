var express = require('express');
var path= require('path');
var app = express();
var stylus = require('stylus');


app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.use(require('stylus').middleware(__dirname + '/public'));

app.listen(process.argv[2]);