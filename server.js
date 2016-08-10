var fs = require('fs');

var pdfFillForm = require('pdf-fill-form');

var req_body_data = {
    "First Name" : "Hey",
    "phonenumber" : "321222" ,
    "completion" : true /*,
    "football" : "Off",
    "baseball" : "Yes",
    "basketball" : "Off",
    "hockey" : "Yes",
    "nascar" : "Off"
		*/
};	 

/*-------- Web Serve ---------*/
function poster(req, res){
		pdfFillForm.writeAsync('test/test.pdf', 
			req_body_data, { "save": "imgpdf" }, 
			function(err, pdf) {
					//fs.writeFile("test/filled_test.pdf", pdf, function(err){});
						res.contentType("application/pdf");
						res.send(pdf);
			}
	);	
}	

const app = require('express')();
app.get('/', function (req, res) {

	var pdfFields = pdfFillForm.readSync('test/test.pdf');
	
	res.contentType("application/json");
  res.send(JSON.stringify(pdfFields));
});


app.post('/', poster);
app.get('/post', poster);

const PORT = 3000;
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);