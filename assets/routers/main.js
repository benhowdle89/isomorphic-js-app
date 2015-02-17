var Backbone = require('backbone');
var React = require('react');

var Controller = require('./../controller.jsx');
var AppComponent = require('./../components/app.jsx');
var UsersComponent = require('./../components/users.jsx');
var ProductsComponent = require('./../components/products.jsx');

var ProductsCollection = require('./../collections/products');

module.exports = Backbone.Router.extend({
	initialize: function() {

	},
	routes: {
		"users": "showUsers",
		"products": "showProducts"
	},
	showUsers: function() {
		return this.renderApp(UsersComponent);
	},
	showProducts: function() {
		return this.renderApp(ProductsComponent, {
			products: ProductsCollection
		});
	},
	renderApp: function(component, collections, models) {
		var appComponentFactory = React.createFactory(AppComponent);
		var appComponent = appComponentFactory({
			component: component,
			collection: collections || {},
			model: models || {}
		});
		if (typeof window === 'undefined') {
			return React.renderToString(appComponent);
		}
		return React.render(appComponent, document.querySelector('main'));
	}
});