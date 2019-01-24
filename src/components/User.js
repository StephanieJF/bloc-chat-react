import React, { Component } from 'react';


class User extends Component {

	handleSignIn(){
		const provider = new this.props.firebase.auth.GoogleAuthProvider();
		this.props.firebase.auth().signInWithPopup( provider );
	}

	handleSignOut(){
		this.props.firebase.auth().signOut();
	}

	componentDidMount(){
		this.props.firebase.auth().onAuthStateChanged( user => {
  		this.props.setUser(user);
		});
	}

	render(){
		return(
			<div>
				<h4>Current User:
				{this.props.user? this.props.user.displayName : " Guest"}</h4>
				{this.props.user?
					<button onClick={() => this.handleSignOut()}>Sign Out</button>
				:
					<button onClick={() => this.handleSignIn()}>Sign In</button>
				}
			</div>
		);
	}
}

export default User;
