'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

var router = _express2.default.Router();

var staticFiles = _express2.default.static(_path2.default.join(__dirname, '../../client/build'));
app.use(staticFiles);

app.get('/article', function (req, res) {
  res.json({ "here": "fucker" });
});

app.use(router);

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles);

var Promise = require("bluebird");

var mongoose = require("mongoose");

mongoose.Promise = Promise;

console.log("run");

// mongoose.connect("mongodb://localhost/nyt_db");
// var db = mongoose.connection;
// db.on("error", function (error) {
// 	console.log("Mongoose Error: ", error);
// });

var PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log('Listening on ' + PORT);
});