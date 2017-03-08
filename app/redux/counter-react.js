export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('increment called');
      return state + 1;
    case 'DECREMENT':
      console.log('decrement called');
      return state - 1;
    default:
      return state
  }
}
