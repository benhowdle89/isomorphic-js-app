var React = require('react');
var AppComponent = require('./components/app.jsx');
var Backbone = require('backbone');
var MainRouter = require('./routers/main');

module.exports = {
	init: function(req, res, next) {
		this.mainRouter = new MainRouter();
		this.mainRouter.on('route', function(route){
			var markup = this.mainRouter[route]();
			this.respond(res, markup);
		}.bind(this));
		Backbone.history.loadUrl(req.url);
	},
	respond: function(res, markup) {
		res.render('index', {
			initialMarkup: markup
		});
	}
};