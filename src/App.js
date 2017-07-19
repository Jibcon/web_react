/**
 * Created by jaeyoung on 7/19/17.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';

// CSS
import './css/style.css';

// Component
class GuestList extends Component {

  render() {
    return (
      <div className="">
        <ul>


        </ul>
      </div>
    );
  }
}

render(
<GuestList />,
  document.getElementById('root')
);