import React from 'react';
import { connect } from 'react-redux';
import { Counter } from './counter';
import { incrementCounter, decrementCounter } from './actions/';

class ReduxComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <Counter
        value={this.props.data}
        onIncrement={() => {this.props.onIncrement(2)}}
        onDecrement={() => {this.props.onDecrement(3)}}
      />
    </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.counter.value
  }
};

const mapDispatchToProps = {
  onIncrement:  incrementCounter,
  onDecrement:  decrementCounter
};

const mapDispatchToProps2 = (dispatch, ownProps) => {
  return {
    onIncrement: (amount) => {
      dispatch(incrementCounter(amount));
    },
    onDecrement: (amount) => {
      dispatch(decrementCounter(amount));
    }
  };
};

export const ReduxSample = connect(
  mapStateToProps,
  mapDispatchToProps2
)(ReduxComponent);

