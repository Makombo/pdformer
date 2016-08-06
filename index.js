var fs = require('fs');

var pdfFillForm = require('pdf-fill-form');
var req_body_data = {
    "last_name" : "Momo",
    "first_name" : "Sakala" /*,
    "date" : "Jan 1, 1988,
    "football" : "Off",
    "baseball" : "Yes",
    "basketball" : "Off",
    "hockey" : "Yes",
    "nascar" : "Off"
		*/
};	 


	
/*-------- Web Serve ---------*/
const app = require('express')();
app.get('/', function (req, res) {

	var pdfFields = pdfFillForm.readSync('test/test.pdf');
	output['pdfFields'] = pdfFields;
	res.contentType("application/json");
  res.send(JSON.stringify(output));
});

app.get('/post', function (req, res) {


	pdfFillForm.writeAsync('test/test.pdf', 
			req_body_data, { "save": "pdf" }, 
			function(err, pdf) {
					//fs.writeFile("test/filled_test.pdf", pdf, function(err){});
						res.contentType("application/pdf");
						res.send(pdf);
			}
	);	
		
	

});

const PORT = 3000;
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);