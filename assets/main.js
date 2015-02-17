var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var MainRouter = require('./routers/main');

var mainRouter = new MainRouter();

Backbone.history.start({
	pushState: true
});