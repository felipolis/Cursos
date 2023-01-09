const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const { incrementAction, decrementAction } = require('./actions/counterActions');
const { addItemAction } = require('./actions/listActions');


const counterReducer = require('./reducers/counterReducer');
const listReducer = require('./reducers/listReducer');


// Reducers
const allReducers = combineReducers({
	counter: counterReducer,
	list: listReducer
});

// Store
const store = createStore(allReducers);
console.log('Current state: ', store.getState().list);

// Subscribe
store.subscribe(() => {
	console.log('Current state: ', store.getState().counter);
});

// Dispatch
store.dispatch(addItemAction('Item 1'));
store.dispatch(decrementAction());
store.dispatch(addItemAction('Item 2'));
store.dispatch(decrementAction());

store.dispatch(incrementAction(2));
store.dispatch(incrementAction(1));
store.dispatch(addItemAction('Item 3'));
store.dispatch(incrementAction(2));
store.dispatch(addItemAction('Item 4'));
store.dispatch(incrementAction());
store.dispatch(incrementAction());



