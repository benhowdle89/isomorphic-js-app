var Backbone = require('backbone');
var Bootstrap = require('./../bootstrap');

module.exports = Backbone.Collection.extend({
	bootstrap: function() {
		if (typeof window === 'undefined') {
			this.reset(this.fetchData(this.name));
		} else {
			if (typeof BOOTSTRAP !== 'undefined') {
				return this.reset(BOOTSTRAP);
			}
			return this.fetch({
				reset: true
			});
		}
	},
	fetchData: function(collection) {
		return Bootstrap[collection];
	}
});