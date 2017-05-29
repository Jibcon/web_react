/**
 * Created by jaeyoung on 2017. 5. 29..
 */
/**
 * Created by jaeyoung on 2017. 5. 29..
 */
import React, { PropTypes } from 'react';

const Chat = (props = {}) => {
  const { data: { author, room, timeStamp, text } } = props;

  return (
    <div
      style={{
        margin: '10px',
        backgroundColor: '#426c89',
        color: "white",
      }}
    >
      <h6> author : {author} </h6>
      <h6> room : {room} </h6>
      <h6> timestamp : {timeStamp} </h6>
      <h6> text : {text} </h6>
    </div>
  );
};

Chat.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
};

Chat.defaultProps = {
  data: {},
};
export default Chat;
