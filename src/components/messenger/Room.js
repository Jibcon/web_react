/**
 * Created by jaeyoung on 2017. 5. 29..
 */
import React from 'react';
import Chat from "./Chat";
import Inputbar from "./Inputbar";
// import getChats from "../utils/ChatDBHelper";

// const Room = (props = {}) => {
const Room = React.createClass({
  propTypes: {
    initialChats: React.PropTypes.arrayOf(React.PropTypes.shape({
      text: React.PropTypes.string.isRequired,
      author: React.PropTypes.string.isRequired,
      room: React.PropTypes.string.isRequired,
      timeStamp: React.PropTypes.string.isRequired,
    })).isRequired,
  },

  defaultProps: {
    initialChats: {},
  },

  onChatSend(content) {
    console.log("onChatSend", content);
  },

  render() {
    return (
      <div>
        <h1>Room!</h1>

        {this.props.initialChats.map(chat => <Chat data={chat} />)}
        <Inputbar onSend={this.onChatSend} />
      </div>
    );
  },
});

export default Room;
