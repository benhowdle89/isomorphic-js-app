var React = require('react');
var Backbone = require('backbone');
var BackboneMixin = require('backbone-react-component');

var HeaderComponent = require('./header.jsx');
var FooterComponent = require('./footer.jsx');

module.exports = React.createClass({
	processCollections: function(){
		var collection = {};
		for(var col in this.props.collection){
			collection[col] = new this.props.collection[col];
		}
		return collection;
	},
	render: function(){
		return (
			<div>
				<HeaderComponent />
				{<this.props.component collection={this.processCollections()}/>}
				<FooterComponent />
			</div>
		);
	}
});