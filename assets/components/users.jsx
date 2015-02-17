var React = require('react');
var Backbone = require('backbone');
var BackboneMixin = require('backbone-react-component');

module.exports = React.createClass({
	mixins: [BackboneMixin],
	componentWillMount: function(){
		this.getCollection().users.on('reset remove', function(){
			this.setState({
				users: this.getCollection().users
			});
		}.bind(this));
		this.getCollection().users.bootstrap();
	},
	createUser: function(user){
		return <li key={user.get('name')}>{user.get('name')}</li>;
	},
	render: function(){
		return (
			<div>
				<p>USERS:</p>
				<ul>{(this.state.users) && this.state.users.map(this.createUser)}</ul>
			</div>
		);
	}
});