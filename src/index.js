import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import initialState from './constants/initialState';
import serverInit from './actions/serverInit';
import Store from './store';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.PRELOADED_STATE || initialState;
// Create Redux store with initial state
const store = new Store(preloadedState);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
            </ul>
            <Route path='/' component={Component} exact={true} />
          </div>
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

store.dispatch(serverInit());
render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
