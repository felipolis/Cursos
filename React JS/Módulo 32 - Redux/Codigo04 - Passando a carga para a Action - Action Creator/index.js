const redux = require('redux');
const createStore = redux.createStore;


// Action
const incrementAction = (value) => {
    return {
        type: 'INCREMENT',
        payload: value || 1
    }
}

const decrementAction = (value) => {
    return {
        type: 'DECREMENT',
        payload: value || 1
    }
}



// Reducer
function counterReducer(state = 6, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
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
store.dispatch(decrementAction());
store.dispatch(decrementAction());

store.dispatch(incrementAction(2));
store.dispatch(incrementAction(1));
store.dispatch(incrementAction(2));
store.dispatch(incrementAction());
store.dispatch(incrementAction());


