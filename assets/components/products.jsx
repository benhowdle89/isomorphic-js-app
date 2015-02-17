var React = require('react');
var Backbone = require('backbone');
var BackboneMixin = require('backbone-react-component');

module.exports = React.createClass({
	mixins: [BackboneMixin],
	componentWillMount: function(){
		this.getCollection().products.on('reset remove', function(){
			this.setState({
				products: this.getCollection().products
			});
		}.bind(this));
		this.getCollection().products.bootstrap();
	},
	removeProduct: function(product){
		this.getCollection().products.remove(product);
	},
	createProduct: function(product){
		return <li key={product.get('name')} onClick={this.removeProduct.bind(this, product)}>{product.get('name')}</li>;
	},
	render: function(){
		return (
			<div>
				<p>PRODUCTS:</p>
				<ul>{(this.state.products) && this.state.products.map(this.createProduct)}</ul>
			</div>
		);
	}
});