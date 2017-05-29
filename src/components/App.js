import React from 'react';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
      Hello World!
      <Link to={'/ad'}>Some tag</Link>
  </div>
);

export default App;
