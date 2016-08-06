const express = require('express');

// Constants
const PORT = 3000;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello momo lolo sakala hey\n');
});

const pdfFiller   = require('pdffiller');

var sourcePDF = "test/test.pdf";
var destinationPDF =  "test/test_complete.pdf";
var shouldFlatten = true;
var data = {
    "last_name" : "John",
    "first_name" : "Doe",
    "date" : "Jan 1, 2013",
    "football" : "Off",
    "baseball" : "Yes",
    "basketball" : "Off",
    "hockey" : "Yes",
    "nascar" : "Off"
};

pdfFiller.fillFormWithFlatten( sourcePDF, destinationPDF, data, shouldFlatten, function(err) {
    if (err) throw err;
    console.log("In callback (we're done).");
}); 

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);