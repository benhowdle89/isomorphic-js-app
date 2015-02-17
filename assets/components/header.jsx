var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<header>
				<h1>Header</h1>
				<a href="/users">Users</a>
				<br />
				<a href="/products">Products</a>
			</header>
		);
	}
});