var Backbone = require('backbone');
var baseCollection = require('./base');

module.exports = baseCollection.extend({
	url: "/api/products",
	name: "products"
});