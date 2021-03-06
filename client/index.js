/* eslint no-undef: "error" */
/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import promiseMiddleware from 'redux-promise';

import Routes from './routes';
import Reducers from './src/reducers';

import appWrapper from './app';

const App = appWrapper((
  <Router history={browserHistory} routes={Routes} />
));

const muiTheme = getMuiTheme({
  fontFamily : 'Roboto, sans-serif',
  palette    : {
    primary1Color: '#F7931D'
  }
});

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={createStoreWithMiddleware(Reducers)}>
      <App />
    </Provider>
  </MuiThemeProvider>
  /* eslint-disable */
  , document.getElementById('main'));
  /* eslint-enable */
