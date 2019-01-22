import React, { Component } from 'react';
import './MessageList.css';
import formatDate from './../modules/formatDate'

class MessageList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [],
		};
		this.messagesRef = this.props.firebase.database().ref('messages');
	}

	componentDidMount() {
		this.messagesRef.on('child_added', snapshot => {
			const message = snapshot.val();
			message.key = snapshot.key;
			this.setState({ messages: this.state.messages.concat( message ) })
		});
	}

	render() {
		return (
			<div>
				{this.state.messages.filter(message => message.roomId == this.props.activeRoom.key ).map( (message, index) =>
					<div className="Message" key={index}>
						<div className="Chat-preview">
							<span className="from">{message.userName}</span>
							<span className="time">{formatDate(message.sentAt)}</span>
						</div>
						<div className="content">{message.content}</div>
					</div>
				)}
			</div>
		);
	}
}

export default MessageList;
