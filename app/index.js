import _ from 'lodash';
import 'purecss';
import moment from 'moment';
import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from './button';

ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <p className="output">The time now is: <span>{moment().format()}</span></p>
    <Button/>
  </div>
  ,
  document.getElementById('root')
);



/*
function component () {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello','draymond out of the game webpack'], ' Klay lost 3 points');

  return element;
}

document.body.appendChild(component());
document.getElementById("output").innerHTML = `
  Style this paragraph.<br>
  <span>${moment().format()}</span><br>
  <button class='pure-button'>A Pure Button</button>
`;
*/