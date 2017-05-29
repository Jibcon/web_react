import React from 'react';
import { Link } from 'react-router-dom';
import Room from "./messenger/Room";

const App = () => (
  <div>
    Hello World!
    <Link to={'/ad'}>Some tag</Link>


    <br />

    <br />

    <Room />
  </div>
);

export default App;
