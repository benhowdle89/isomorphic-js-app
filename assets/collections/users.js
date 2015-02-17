var Backbone = require('backbone');
var baseCollection = require('./base');

module.exports = baseCollection.extend({
	url: "/api/users",
	name: "users"
});