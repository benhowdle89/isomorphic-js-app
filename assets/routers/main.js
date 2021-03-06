var Backbone = require('backbone');
var React = require('react');

var Controller = require('./../controller.jsx');
var AppComponent = require('./../components/app.jsx');
var HomeComponent = require('./../components/home.jsx');
var UsersComponent = require('./../components/users.jsx');
var ProductsComponent = require('./../components/products.jsx');

var ProductsCollection = require('./../collections/products');
var UsersCollection = require('./../collections/users');

module.exports = Backbone.Router.extend({
	initialize: function() {

	},
	routes: {
		"/": "home",
		"": "home",
		"users": "showUsers",
		"products": "showProducts",
		"*path": "home"
	},
	home: function(){
		return this.renderApp(HomeComponent);
	},
	showUsers: function() {
		return this.renderApp(UsersComponent, {
			users: UsersCollection
		});
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