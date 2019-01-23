import React, { Component } from 'react';

class User extends Component {

	handleSignIn(){
		const provider = new this.props.firebase.auth.GoogleAuthProvider();
		this.props.firebase.auth().signInWithPopup( provider );
	}

	handleSignOut(){
		this.props.firebase.auth().signOut();
	}

	render(){
		return(
			<div>
				<button onClick={() => this.handleSignIn()}>Sign In</button>
				<button onClick={() => this.handleSignOut()}>Sign Out</button>
			</div>
		);
	}
}

export default User;
