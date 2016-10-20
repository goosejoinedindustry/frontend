import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Routes from './routes';
import Reducers from './src/reducers';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={createStoreWithMiddleware(Reducers)}>
      <Router history={browserHistory} routes={Routes} />
    </Provider>
  </MuiThemeProvider>
  /* eslint-disable */
  , document.getElementById('main'));
  /* eslint-enable */

/*
<Provider store={CreateStoreWithMiddleware(Reducers)}>
  <Routes />
</Provider>
*/
