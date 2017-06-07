import React from 'react';
import { Link } from 'react-router-dom';
import Room from "./messenger/Room";

// var chats = getChats();
const CHATS = [
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

const App = () => (
  <div>
    Hello World!
    <Link to={'/ad'}>Some tag</Link>


    <br />

    <br />

    <Room initialChats={CHATS} />
  </div>
);

export default App;
