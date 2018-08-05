import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import playerApp from '../reducers/player-app.js'
import Dashboard from './dashboard.js';

const store = createStore(playerApp);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/' component={Dashboard} />
      </BrowserRouter>
      </Provider>
    )
  }
}

export default App;