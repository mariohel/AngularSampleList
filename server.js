// MEAN Stack RESTful API Tutorial - Contact List App

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('crossover', ['crossover']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//Add headers
app.use(function(req, res, next) {
    var oneof = false;
    if(req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        oneof = true;
    }
    if(req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        oneof = true;
    }
    if(req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        oneof = true;
    }
    if(oneof) {
        res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
    }

    // intercept OPTIONS method
    if (oneof && req.method == 'OPTIONS') {
    	res.sendStatus(200);
    }
    else {
        next();
    }
});

app.get('/crossover', function (req, res) {
  db.crossover.find(function (err, docs) {
	  res.send(docs);
  });
});

app.post('/crossover', function (req, res) {
  console.log(req.body);
  db.crossover.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/crossover/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.crossover.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/crossover/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.crossover.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/crossover/:id', function (req, res) {
  var id = req.params.id;
  db.crossover.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {type: req.body.type, code: req.body.code, state: req.body.state}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.listen(3000);
console.log("Server running on port 3000");