import React from 'react';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import Root from './containers/Root'

import app from './reducers'
import {loadCount} from './firebase'

let store = createStore(app,
  applyMiddleware(thunk)
);

store.dispatch(loadCount());

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    );
  }
}
