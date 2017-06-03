const express = require('express');
const path = require('path');
const app = express();

var Promise = require("bluebird");

var mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/nyt_db");
var db = mongoose.connection;
db.on("error", function (error) {
	console.log("Mongoose Error: ", error);
});


app.use(express.static(path.join(__dirname, 'public')));

app.post('/article', function (req, res) {
  
});

app.listen(3001);