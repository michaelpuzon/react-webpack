import React from 'react';
import { connect } from 'react-redux';
import { Counter } from './counter';
import todoApp from './redux/reducers';


class ReduxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {num: 0};
  }

  render() {
    return (
    <div>
      <Counter
        value={this.props.data}
        onIncrement={() => {this.props.onIncrement()}}
        onDecrement={() => {this.props.onDecrement()}}
      />
      <p>number: {this.state.num}</p>
    </div>

    );
  }
}


const mapStateToProps = (state) => {
  return {
    data: state
  }
};

const mapDispatchToProps = {
  onIncrement:  (id) => ({
    type: 'INCREMENT',
    id
  }),
  onDecrement:  (id) => ({
    type: 'DECREMENT',
    id
  })
};

const ReduxSample = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxComponent);

export default ReduxSample;
