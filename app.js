// external requires
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var hbs = require('hbs');

require('node-jsx').install();

hbs.registerHelper('json', function(value){
	return JSON.stringify(value);
});

// kick off the app
var app = express();

// internal requires
var controller = require('./assets/controller.jsx');
var api = require('./api');

// allows cookies/json data to be parsed
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

app.set('views', __dirname + '/public');
app.set('view engine', 'hbs');
app.engine('html', hbs.__express);

app.use(express.static(path.join(__dirname, 'public')));

// port config
app.set('port', process.env.PORT || 5000);

app.get('/api/products', api.getProducts);
app.get('/api/users', api.getUsers);

app.use(controller.init.bind(controller));

http.createServer(app).listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});