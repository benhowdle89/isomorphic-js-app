var products = require('./products'),
	users = require('./users');

module.exports = {
	getProducts: function(req, res, next) {
		products.get(function(err, data) {
			return res.status(200).send(data);
		});
	},
	getUsers: function(req, res, next) {
		users.get(function(err, data) {
			return res.status(200).send(data);
		});
	}
};