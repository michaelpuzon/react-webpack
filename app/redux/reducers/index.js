import { combineReducers } from 'redux';
import todos from './todo';
import counter from './counter';

const todoApp = combineReducers({
  counter,
  todos
});

export default todoApp