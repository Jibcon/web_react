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
      <div>
        <header style={infoSection}>
          <ul style={infoList}>
            <li>
              <a href="#jibcon">
                <span>
                  jibcon
                  </span>
              </a>
            </li>
            <li>
              <a href="#Recruit">
                <span>
                  Recruit
                </span>
              </a>
            </li>
            <li>
              <a href="#People">
                <span>
                  People
                </span>
              </a>
            </li>
            <li>
              <a href="#Contact">
                <span>
                  Contact
                </span>
              </a>
            </li>
          </ul>
        </header>
        <div>
          <section>
            <div id="jibcon">
              jibcon
            </div>
            <div id="Recruit">
              채용
            </div>
            <div id="People">
              사람들
            </div>
            <div id="Contact">
              연락
            </div>
          </section>
        </div>
      </div>
    );
  }
}

render(
<GuestList />,
  document.getElementById('root')
);
