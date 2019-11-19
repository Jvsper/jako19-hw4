const express = require("express");
const app = express();
const port = 3000;
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

app.get("/", function(req, res){
	res.render("index.html");
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

/* For localhost:3000
app.listen(port, function(){
	console.log("Server is running on " + port);
})
*/

/* For heroku
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Express server is now running");
})
*/