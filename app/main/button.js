import React from 'react';

/*
const buttonClick = () => {
  console.log('button is clicked');
};
*/

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {num: 0};
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    let num = this.state.num + 1;
    this.setState({num: num});
  }

  render() {
    const message = `Number is now ${this.state.num}`;
    return (
      <div>
        <p>{message}</p>
        <button className='pure-button' onClick={this.buttonClick}>An Exported Pure Button</button>
      </div>
    );
  }
}