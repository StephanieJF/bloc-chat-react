import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList'

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
  render() {
    return (
      <div className="App">
				<div className="Available-rooms">
				<header className="App-header">
					<h1>Bloc Chat</h1>
				</header>
					<RoomList
						firebase = {firebase}
					/>
				</div>
      </div>
    );
  }
}

export default App;
