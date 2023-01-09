const redux = require('redux');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const fetch = require('cross-fetch');

const initialState = [
	{
		id: 0,
		title: 'First Todo',
		completed: false
	}
]

const addItem = (item) => {
	return {
		type: 'ADD_ITEM',
		payload: item
	}	
}

const loadItemAndAdd = () => {
	return (dispatch) => {
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then(response => response.json())
			.then(json => dispatch(addItem(json)));
	}
}

const listReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_ITEM':
			return [...state, action.payload];
		default:
			return state;
	}
}

const store = createStore(listReducer, applyMiddleware(thunk));
store.subscribe(() => {
	console.log('Store updated!', store.getState());
});

console.log('Initial state', store.getState());
store.dispatch(addItem({
	id: 1,
	title: 'Second Todo',
	completed: true
}));
store.dispatch(loadItemAndAdd());