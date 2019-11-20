const express = require("express");
const app = express();
const port = 3000;
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
var faker = require("faker");



app.get("/", function(req, res){
	var randomCat = [] 

	for (var i = 0; i < 5; i++ )
	{
		randomCat[i] = faker.image.cats();
	}
	
	
	res.render("index.html", {"cats": randomCat});
})

app.get("/html", function(req, res){
	res.render("html.html");
})

app.get("/css", function(req, res){
	res.render("css.html");
})

app.get("/js", function(req, res){
	res.render("js.html");
})

/*
app.listen(port, function(){
	console.log("Server is running on " + port);
})
*/



app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Express server is now running");
})

