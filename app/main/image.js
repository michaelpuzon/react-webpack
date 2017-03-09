import React from 'react';

import img1 from '../images/IMG_358113.jpg';
//const img1 = require('./images/IMG_358113.jpg');

export class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={img1} />
      </div>
    );
  }
}