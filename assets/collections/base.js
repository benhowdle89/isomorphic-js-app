var Backbone = require('backbone');
var Bootstrap = require('./../bootstrap');

module.exports = Backbone.Collection.extend({
	bootstrap: function() {
		if (typeof window === 'undefined') {
			this.reset(this.fetchData(this.name));
		} else {
			if (typeof BOOTSTRAP !== 'undefined' && BOOTSTRAP[this.name]) {
				return this.reset(BOOTSTRAP[this.name]);
			}
			this.on('reset', function() {
				BOOTSTRAP[this.name] = this.toJSON();
			}.bind(this));
			return this.fetch({
				reset: true
			});
		}
	},
	fetchData: function(collection) {
		return Bootstrap[collection];
	}
});