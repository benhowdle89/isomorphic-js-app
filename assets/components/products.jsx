var React = require('react');
var Backbone = require('backbone');
var BackboneMixin = require('backbone-react-component');

module.exports = React.createClass({
	mixins: [BackboneMixin],
	componentWillMount: function(){
		this.getCollection().products.on('reset', function(){
			this.setState({
				products: this.getCollection().products
			});
		}.bind(this));
		this.getCollection().products.bootstrap();
	},
	removeProduct: function(product){
		this.getCollection().products.remove(product);
		this.setState({
			products: this.getCollection().products
		});
	},
	createProduct: function(product){
		return <li key={product.get('name')} onClick={this.removeProduct.bind(this, product)}>{product.get('name')}</li>;
	},
	render: function(){
		return (
			<p>PRODUCTS: <ul>{(this.state.products) && this.state.products.map(this.createProduct)}</ul></p>
		);
	}
});