const express = require('express');

// Constants
const PORT = 3000;

// App
const app = express();
app.get('/', function (req, res) {
	
	const pdfFiller   = require('pdffiller');

	var sourcePDF = "test/test.pdf";
	var destinationPDF =  "test/test_complete.pdf";
	var shouldFlatten = true;
	var data = {
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
				return console.log("In callback (we're done).");
			}
			
			res.send('Done ' + (new Date()));			
	}); 
	

});



app.listen(PORT);
console.log('Running on http://localhost:' + PORT);