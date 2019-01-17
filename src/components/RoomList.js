import React, { Component } from 'react';
import './RoomList.css';

class RoomList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rooms: [],
			newRoomName: ''
		};
		this.roomsRef = this.props.firebase.database().ref('rooms');
	}

	componentDidMount() {
		this.roomsRef.on('child_added', snapshot => {
			const room = snapshot.val();
			room.key = snapshot.key;
			this.setState({ rooms: this.state.rooms.concat( room ) })
		});
	}

	handleChange(e) {
		this.setState({ newRoomName: e.target.value })
	}

	createRoom(e) {
		e.preventDefault();
		if (!this.state.newRoomName) { return }
		this.roomsRef.push({
		  name: this.state.newRoomName
		});
		this.setState({newRoomName: ''})
	}

	render() {
		return (
			<section className="RoomList">
				{this.state.rooms.map( (room) =>
					<ul className="Room-list">
						<li>{room.name}</li>
					</ul>
				)}
				<div className="Room-form">
					<h1>Create New Room</h1>
					<form onSubmit={ (e) => this.createRoom(e) }>
						<input
							type="text"
							value={this.state.newRoomName}
							onChange={ (e) => this.handleChange(e) }
						/>
						<input type="submit" />
					</form>
				</div>
			</section>
		);
	}
}

export default RoomList;
