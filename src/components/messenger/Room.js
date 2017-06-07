/**
 * Created by jaeyoung on 2017. 5. 29..
 */
import React from 'react';
import Chat from "./Chat";
import Inputbar from "./Inputbar";
// import getChats from "../utils/ChatDBHelper";

// const Room = (props = {}) => {
function Room(props) {
  return (
    <div>
      <h1>Room!</h1>

      {props.initialChats.map(chat => <Chat data={chat} />)}
      <Inputbar />
    </div>
  );
}

Room.propTypes = {
  initialChats: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    room: React.PropTypes.string.isRequired,
    timeStamp: React.PropTypes.string.isRequired,
  })).isRequired,
};

Room.defaultProps = {
  data: {},
};

export default Room;
