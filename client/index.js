import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import Routes from './routes';

import Reducers from './src/reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducers)}>
    <Router history={browserHistory} routes={Routes} />

  </Provider>
  /* eslint-disable */
  , document.getElementById('main'));
  /* eslint-enable */

/*
<Provider store={CreateStoreWithMiddleware(Reducers)}>
  <Routes />
</Provider>
*/
