/**
 * Created by jaeyoung on 2017. 5. 29..
 */
import React, { Component, PropTypes } from 'react';
import Chat from "./Chat";
import Inputbar from "./Inputbar";
// import getChats from "../utils/ChatDBHelper";

class Room extends Component {
// const Room = React.createClass({
  constructor(props) {
    super(props);
    this.onChatSend = this.onChatSend.bind(this);
    this.state = {
      chats: props.initialChats,
      nextId: props.initialChats.length + 1,
    };
  }

  onChatSend(content) {
    this.state.chats.push({
      id: this.state.nextId,
      text: content,
      author: "JYP",
      room: "KUCC",
      timeStamp: "now",
    });
    this.setState(this.state);
    this.state.nextId += 1;
  }

  render() {
    return (
      <div>
        <h1>Room!</h1>
        {
          this.state.chats.map((chat = {}) => (
            <Chat
              author={chat.author}
              room={chat.room}
              timeStamp={chat.timeStamp}
              text={chat.text}
              key={chat.id}
              id={chat.id}
            />
          ))
        }
        <Inputbar onSend={this.onChatSend} />
      </div>
    );
  }
}

Room.propTypes = {
  initialChats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
  })).isRequired,
};

Room.defaultProps = {
  initialChats: {},
};


export default Room;
