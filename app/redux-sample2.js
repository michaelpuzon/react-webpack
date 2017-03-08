import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import {Counter} from './counter';
import counterReducer from './redux/counter';
import todoApp from './redux/reducers';

let store = createStore(counterReducer);
//let store = createStore(todoApp);


export class ReduxSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {num: 0};
  }

  componentDidMount() {
    let reactThis = this;
    store.subscribe(function () {
      reactThis.setState({num: store.getState()});
      console.log('state really changed', store.getState());
    });
  }

  render() {
    return (
    <div>
      <Counter
        value={this.state.num}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
      <p>number: {this.state.num}</p>
    </div>

    );
    /*
     <Counter
     value={this.state.num}
     onIncrement={() => {const num = this.state.num + 1; this.setState({num: num}); console.log('inc num', num )}}
     onDecrement={() => {const num = this.state.num - 1; this.setState({num: num}); console.log('dec num', num )}}
     />
     <Counter
     value={store.getState()}
     onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
     onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
     />
    * */
  }
}


/*
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'DECREMENT' });
*/



//
