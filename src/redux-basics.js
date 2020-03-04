const { createStore } = require('redux');

const initialState = {
  counter: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      state = {
        ...state,
        counter: state.counter + 1
      };
      break;
    case 'ADD_COUNTER':
      state = {
        ...state,
        counter: state.counter + action.payload.value
      };
      break;
    default:
      state = { ...state };
  }

  return state;
};

// Create Redux store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription: Components should subscribe to the store before hand
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch Actions
store.dispatch({ type: 'INCREMENT_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', payload: { value: 10 } });
store.dispatch({ type: 'ADD_COUNTER', payload: { value: 4 } });
store.dispatch({ type: 'INCREMENT_COUNTER' });
store.dispatch({ type: 'INCREMENT_COUNTER' });
store.dispatch({ type: 'INCREMENT_COUNTER' });
store.dispatch({ type: 'INCREMENT_COUNTER' });
store.dispatch({ type: 'INCREMENT_COUNTER' });
