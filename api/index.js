var products = require('./products');

module.exports = {
	getProducts: function(req, res, next) {
		products.get(function(err, data) {
			return res.status(200).send(data);
		});
	}
};