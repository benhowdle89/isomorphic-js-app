var Backbone = require('backbone');
var React = require('react');

var Controller = require('./../controller.jsx');
var AppComponent = require('./../components/app.jsx');
var UsersComponent = require('./../components/users.jsx');

module.exports = Backbone.Router.extend({
	initialize: function() {

	},
	routes: {
		"users": "showUsers"
	},
	showUsers: function() {
		return this.renderApp(UsersComponent);
	},
	renderApp: function(component){
		if(typeof window === 'undefined'){
			var appComponentFactory = React.createFactory(AppComponent);
			return React.renderToString(appComponentFactory({
				component: component
			}));
		}
		React.render(<AppComponent component={component} />, document.body);
	}
});