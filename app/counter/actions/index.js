export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function incrementCounter (amount) {
  console.log('increment called from actions');
  return {
    type: 'INCREMENT',
    amount: amount
  };
}

export function decrementCounter (amount) {
  console.log('increment called from actions');
  return {
    type: 'DECREMENT',
    amount: amount
  };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}