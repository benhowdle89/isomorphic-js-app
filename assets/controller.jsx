var React = require('react');
var Backbone = require('backbone');

var AppComponent = require('./components/app.jsx');
var MainRouter = require('./routers/main');
var Bootstrap = require('./bootstrap');
var ProductsAPI = require('./../api/products');
var UsersAPI = require('./../api/users');

var apiMap = {
	showProducts: function() {
		return {
			name: "products",
			fetch: ProductsAPI.get
		};
	},
	showUsers: function() {
		return {
			name: "users",
			fetch: UsersAPI.get
		};
	}
};

module.exports = {
	init: function(req, res, next) {
		this.mainRouter = new MainRouter();
		this.mainRouter.on('route', function(route) {
			this.bootstrap(route, function(data) {
				var markup = this.mainRouter[route]();
				this.respond(res, markup, data);
			}.bind(this));
		}.bind(this));
		Backbone.history.loadUrl(req.url);
	},
	getMapRouteFromRoute: function(route) {
		return apiMap[route];
	},
	bootstrap: function(route, callback) {
		var mapRoute;
		if (mapRoute = this.getMapRouteFromRoute(route)) {
			mapRoute().fetch(function(err, data) {
				var name = mapRoute().name;
				Bootstrap[name] = data;
				var obj = {};
				obj[name] = data;
				callback(obj);
			}.bind(this));
		} else {
			callback(null);
		}
	},
	respond: function(res, markup, data) {
		res.render('index', {
			initialMarkup: markup,
			data: data
		});
	}
};