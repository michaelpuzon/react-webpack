import React from 'react';
import {Button} from './button';
import {Image} from './image';
import 'purecss';
import moment from 'moment';
import { Link } from 'react-router';

export class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/button">Link to button</Link>
        <h1>Hello, world!</h1>
        <p className="output">The time now is: <span>{moment().format()}</span></p>
        <Button/>
        <Image/>
      </div>
    );
  }
}