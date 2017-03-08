import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Counter} from './counter';
import counterReducer from './redux/counter'

const store = createStore(counterReducer);
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)


//
