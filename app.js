const express = require("express");
const app = express();
const port = 3000;
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
var faker = require("faker");



app.get("/", function(req, res){
	var cats = faker.image.cats();
	console.log (cats);
	res.render("index.html", {"cats": cats});
})

app.get("/html", function(req, res){

	var cats = faker.image.cats();
	console.log (cats);

	res.render("html.html",{"cats":cats});
})

app.get("/css", function(req, res){
	var cats = faker.image.cats();
	console.log (cats);


	res.render("css.html",{"cats":cats});
})

app.get("/js", function(req, res){
	var cats = faker.image.cats();
	console.log (cats);

	res.render("js.html",{"cats":cats});
})

/*
app.listen(port, function(){
	console.log("Server is running on " + port);
})
*/



app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Express server is now running");
})


