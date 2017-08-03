/* global document:true */

import 'purecss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Main from './main/';
import ReduxSample from './counter/';
import sampleApp from './root-reducer';

const store = createStore(
  sampleApp,
  applyMiddleware(thunk)
);

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} />
          <Route path="/redux" component={ReduxSample} />
        </Switch>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);
