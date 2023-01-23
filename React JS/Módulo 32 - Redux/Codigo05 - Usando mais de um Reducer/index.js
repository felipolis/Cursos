const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

// ------------ CONTADOR ------------
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

// ------------ LISTA ------------
// Action
const addItemAction = (item) => {
	return {
		type: 'ADD_ITEM',
		payload: item
	}
}

// Reducer
const listReducer = (state = ['Um item padrao'], action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return [...state, action.payload];
		default:
			return state;
	}
};






// Reducers
const allReducers = combineReducers({
	counter: counterReducer,
	list: listReducer
});

// Store
const store = createStore(allReducers);
console.log('Current state: ', store.getState());

// Subscribe
store.subscribe(() => {
	console.log('Current state: ', store.getState());
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



