import 'purecss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import {Main} from './main/'
import {ReduxSample} from './counter/';
import './style/main.scss';
import sampleApp from './root-reducer';

let store = createStore(sampleApp);

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Main}/>
        <Route path="/redux" component={ReduxSample}/>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
