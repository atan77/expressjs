var express = require('express');
var fs = require('fs');
var app = express();

//set app.get to read data after books path
app.get('/books', function(request, response) {
    //read file specified in process.argv[3] and call function to process file contents
    fs.readFile(process.argv[3], function doneReading(err, fileContents) {
        //response if error occurs
        if (err) throw err;
        //JSON parse data as specified into a variable
        books = JSON.parse(fileContents);
        //respond to the request with the JSON parsed data
        response.json(books)
})
})
app.listen(process.argv[2]);