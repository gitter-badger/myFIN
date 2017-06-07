/**
 * Created by Luiz Eduardo de Christo
 * May 30th, 2017
 * Application server
 */

var express = require('express');

var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongose = require('mongoose');
var morgan = require('morgan');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api + json'}));
app.use(methodOverride());

app.get('/', function(req, res) {
	res.redirect(200, 'index.html');
});

module.exports = app;
app.listen(4000);
console.log('myFIN started at port 4000.');