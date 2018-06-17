import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import Root from './containers/Root'

import app from './reducers'

let store = createStore(app);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    );
  }
}
