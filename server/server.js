var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const router = express.Router()

const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(staticFiles)

app.get('/article', function (req, res) {
  res.json({"here" : "fucker"});
});

app.use(router)

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles)

var Promise = require("bluebird");

var mongoose = require("mongoose");

mongoose.Promise = Promise;

var options = {
  db: { native_parser: true },
  server: { poolSize: 5 },
  replset: { rs_name: 'myReplicaSetName' }
}

options.server.socketOptions = options.replset.socketOptions = { keepAlive: 120 };

mongoose.connect("mongodb://mtkeller:mew123@ds161121.mlab.com:61121/heroku_xn5tflf2", options);
var db = mongoose.connection;
db.on("error", function (error) {
	console.log("Mongoose Error: ", error);
});

require("./controllers/api-routes")(app);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on ` + PORT)
})
