var React = require('react');

var HeaderComponent = require('./header.jsx');
var FooterComponent = require('./footer.jsx');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<HeaderComponent />
				{<this.props.component/>}
				<FooterComponent />
			</div>
		);
	}
});