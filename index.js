const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./models");

//app.use(express.static(__dirname+'/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));


app.get("/", function(req,res){
	res.sendFile("index.html");
});

app.post("/users", function(req, res){
	db.User.create(req.body)
	.then(function(newUser){
		res.status(201).json(newUser);
	})
	.catch(function(err){
		res.send(err);
	});
});

app.listen(3000, ()=>{
	console.log("Server running!");
});