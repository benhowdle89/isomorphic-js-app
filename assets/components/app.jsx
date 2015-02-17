var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<div id="main">
				{<this.props.component/>}
			</div>
		);
	}
});