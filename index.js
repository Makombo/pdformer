const express = require('express');
const fs = require('fs');

// Constants
const PORT = 3000;
const app = express();
const pdfFiller   = require('pdffiller');

var sourcePDF = "test/test.pdf";
var destinationPDF =  "test/test_complete.pdf";
var shouldFlatten = true;

app.get('/', function (req, res) {
	

	const data = {
			"First Name" : "Somo",
			"phonenumber" : "123" ,
			"completion" : "Yes" /*,
			"football" : "Off",
			"baseball" : "Yes",
			"basketball" : "Off",
			"hockey" : "Yes",
			"nascar" : "Off"
			*/
	};

	pdfFiller.fillFormWithFlatten( sourcePDF, destinationPDF, data, shouldFlatten, function(err) {
			if (err) {
				throw err;
				return console.log("Failed to Make PDF.");
			}


    fs.readFile(__dirname + "/" + destinationPDF , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
		
		//	res.send('Done ' + (new Date()));			
	}); 
	

});

app.post('/', function (req, res) {


	pdfFiller.fillFormWithFlatten( sourcePDF, destinationPDF, req.body.data, shouldFlatten, function(err) {
			if (err) {
				throw err;
				return console.log("Failed to Make PDF.");
			}


    fs.readFile(__dirname + "/" + destinationPDF , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
		
		//	res.send('Done ' + (new Date()));			
	}); 
	

});



app.listen(PORT);
console.log('Running on http://localhost:' + PORT);