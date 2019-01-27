import React, { Component } from 'react';
import './MessageList.css';
import formatDate from './../modules/formatDate'

class MessageList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [],
			newMessage: ""
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

	handleChange(e) {
		this.setState({ newMessage: e.target.value });
	}

	createMessage(e) {
		e.preventDefault();
		if (!this.state.newMessage) {return}
		this.messagesRef.push({
			content: this.state.newMessage,
			roomId: this.props.activeRoom.key,
			sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
			userName: this.props.user? this.props.user.displayName : "Guest User"
		});
		this.setState({newMessage: ""})
	}

	render() {
		return (
			<section className="Messages">
			<div className="Room-name">
			<h1>{this.props.activeRoom.name}</h1>
			</div>
				<div className="Show-messages">
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
				<div className="Message-form">
					<form onSubmit={ (e) => this.createMessage(e) }>
						<textarea
							placeholder="Write your message here..."
							value={this.state.newMessage}
							onChange={ (e) => this.handleChange(e) }
						></textarea>
						<input type="submit" />
					</form>
				</div>
			</section>
		);
	}
}

export default MessageList;
