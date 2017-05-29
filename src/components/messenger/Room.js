/**
 * Created by jaeyoung on 2017. 5. 29..
 */
import React from 'react';
import Chat from "./Chat";
import Inputbar from "./Inputbar";
// import getChats from "../utils/ChatDBHelper";

const Room = () => {
  // var chats = getChats();
  const chats = [
    {
      text: "hi",
      author: "jyp",
      room: "myroom",
      timeStamp: "December 17, 1995 03:24:00",
    },
    {
      text: "hi",
      author: "jyp",
      room: "myroom",
      timeStamp: "December 17, 1995 03:24:00",
    },
    {
      text: "hi",
      author: "jyp",
      room: "myroom",
      timeStamp: "December 17, 1995 03:24:00",
    },
  ];

  return (
    <div>
      <h1>Room!</h1>

      {chats.map(chat => <Chat data={chat} />)}
      <Inputbar />
    </div>
  );
};

export default Room;
