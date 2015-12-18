var express = require('express');
var app = express();

app.set('view engine', 'jade');
// change standard app.set('views', path.join(__dirname, 'templates')) as process.argv[3] has all required text
app.set('views', process.argv[3]);
//set app.get with a callback function to render the date from index.jade in the location specified by process.argv[3]
    app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()});

})
app.listen(process.argv[2]);
