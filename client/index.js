import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Routes from './routes';
import Reducers from './src/reducers';
const CreateStoreWithMiddleware = applyMiddleware()(createStore);

export default class MyComponent extends Component {
  render() {
    console.log('my Component from index.js - justin')
    return (
      <div>This is my react render</div>
    )
  }
}

ReactDOM.render(
  <Provider store={CreateStoreWithMiddleware(Reducers)}>
    <Router history={History}>{routes}</Router>
  </Provider>
  , document.getElementById('main'));
