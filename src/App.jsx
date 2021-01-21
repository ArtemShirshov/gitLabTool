import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { MuiThemeProvider } from '@material-ui/core';

import { HomeConnected } from 'containers/Home/Home';
import { MaterialUiTheme } from 'components/_MaterialUi/Theme';

import configureStore, { history } from './store';
import './App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={MaterialUiTheme}>
          <Router>
            <Switch>
              <Route path="/" component={HomeConnected} />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
