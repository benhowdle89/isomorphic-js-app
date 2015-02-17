var Backbone = require('backbone');
var baseCollection = require('./base');

module.exports = baseCollection.extend({
	url: "/api/products",
	bootstrap: function() {
		if (typeof window === 'undefined') {
			this.reset(this.fetchData('products'));
		} else {
			if (typeof BOOTSTRAP !== 'undefined') {
				return this.reset(BOOTSTRAP);
			}
			return this.fetch({
				reset: true
			});
		}
	}
});