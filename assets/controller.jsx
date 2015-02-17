var React = require('react');
var Backbone = require('backbone');

var AppComponent = require('./components/app.jsx');
var MainRouter = require('./routers/main');
var Bootstrap = require('./bootstrap');
var ProductsAPI = require('./../api/products');

var apiMap = {
	showProducts: function() {
		return {
			name: "products",
			fetch: ProductsAPI.get	
		};
	}
};

module.exports = {
	init: function(req, res, next) {
		this.mainRouter = new MainRouter();
		this.mainRouter.on('route', function(route) {
			apiMap[route]().fetch(function(err, data) {
				Bootstrap[apiMap[route]().name] = data;
				var markup = this.mainRouter[route]();
				this.respond(res, markup, data);
			}.bind(this));
		}.bind(this));
		Backbone.history.loadUrl(req.url);
	},
	respond: function(res, markup, data) {
		res.render('index', {
			initialMarkup: markup,
			data: data
		});
	}
};