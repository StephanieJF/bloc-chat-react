import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList'
import MessageList from './components/MessageList'
import User from './components/User'

var config = {
    apiKey: "AIzaSyCIPDJWHI-5TS2_gmkFcx9En28zvK2vaDk",
    authDomain: "bloc-chat-cf8c4.firebaseapp.com",
    databaseURL: "https://bloc-chat-cf8c4.firebaseio.com",
    projectId: "bloc-chat-cf8c4",
    storageBucket: "bloc-chat-cf8c4.appspot.com",
    messagingSenderId: "323939692272"
  };

firebase.initializeApp(config);

class App extends Component {
	constructor(props) {
		super(props);
			this.state = {
				activeRoom: "",
				user: "",
			};
	}

	setActiveRoom(e) {
		this.setState({activeRoom: e});
	}

	setUser(user){
		this.setState({user: user});
	}

  render() {
    return (
      <div className="App">
				<section className="Available-rooms">
				<header className="App-header">
					<h1>Bloc Chat</h1>
				</header>
				<div>
					<User
						firebase = {firebase}
						user = { this.state.user }
						setUser = {(user) => this.setUser(user)}
						/>
					<RoomList
						firebase = {firebase}
						activeRoom = { this.state.activeRoom }
						setActiveRoom = {(e) => this.setActiveRoom(e)}
					/>
					</div>
				</section>
				<div className="Message-list">
					<h1>{this.state.activeRoom ? this.state.activeRoom.name : 'Select a Room'}</h1>
					<MessageList
						firebase = {firebase}
						activeRoom = {this.state.activeRoom}
					/>
				</div>
      </div>
    );
  }
}

export default App;
