var Backbone = require('backbone');
var Bootstrap = require('./../bootstrap');

module.exports = Backbone.Collection.extend({
	fetchData: function(collection) {
		return Bootstrap[collection];
	}
});