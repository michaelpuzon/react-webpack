const initialState = {
  value: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(action);
      let counter1 = state.value + action.amount;
      return Object.assign({}, state, {
        value: counter1
      });
    case 'DECREMENT':
      console.log(action);
      let counter2 = state.value - action.amount;
      return Object.assign({}, state, {
        value: counter2
      });
      //return state.counter - action.amount;
    default:
      return state
  }
}
