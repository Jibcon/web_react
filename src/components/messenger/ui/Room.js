/**
 * Created by jaeyoung on 2017. 5. 29..
 */
import React, { Component } from 'react';
import Chat from "./Chat";
import Inputbar from "./Inputbar";

class Room extends Component {
  render() {
    var chats = getChats();

    return (
      <div>
        <h1>Room!</h1>

        <Chat />
        <Inputbar />
      </div>
    );
  }
}

export default Room;
