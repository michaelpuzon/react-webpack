import 'purecss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';

import {Main} from './main'
import {Button} from './button';
import './style/main.scss';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={Main}/>
      <Route path="/button" component={Button}/>
    </Router>
  ),
  document.getElementById('root')
);

/*
ReactDOM.render(

  ,
  document.getElementById('root')
);
*/
