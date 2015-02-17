var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var MainRouter = require('./routers/main');

var mainRouter = new MainRouter();

Backbone.history.start({
	pushState: true
});

$(document).on('click', 'a[href]', function(event){
	event.preventDefault();
	var url = event.currentTarget.pathname.slice(1);
	mainRouter.navigate(url, true);
});