import { combineReducers } from 'redux';
import todos from './counter/reducers/todo';
import counter from './counter/reducers/counter';

const sampleApp = combineReducers({
  counter,
  todos
});

export default sampleApp