const redux = require('redux');
const createStore = redux.createStore;


// Action
const incrementAction = {type: 'INCREMENT'};
const decrementAction = {type: 'DECREMENT'};


// Reducer
function counterReducer(state = 6, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// Store
const store = createStore(counterReducer);
console.log('Current state: ', store.getState());

// Subscribe
store.subscribe(() => {
    console.log('Current state: ', store.getState());
});

// Dispatch
store.dispatch(decrementAction);
store.dispatch(decrementAction);
store.dispatch(decrementAction);
store.dispatch(decrementAction);

store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);

