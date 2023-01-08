import React, { useEffect, useState } from 'react'
import './Todo.css'
import List from './components/List'
import TodoForm from './components/TodoForm'
import Item from './models/Item'
import Modal from './components/Modal'

const SAVED_ITEMS = 'savedItems'

const Todo = () => {

	const [items, setItems] = useState([])

	useEffect(() => {
		let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
		if(savedItems){
			setItems(savedItems)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
	}, [items])

	function addItem(text) {
		let it = new Item(text)
		setItems([...items, it])
	}

	function deleteItem(item) {
		let newItems = items.filter(i => i.id !== item.id)
		setItems(newItems)
	}

	function done(item){
		let newItems = items.map(i => {
			if(i.id === item.id){
				i.done = !i.done
			}
			return i
		})
		setItems(newItems)
	}

  return (
    <div className='container'>
			<header className='header'>
				<h1>Todo List</h1>
				<button className='addButton'>+</button>
			</header>
			<List items={items} onDeleteItem={deleteItem} onDone={done}/>

			<Modal>
				<TodoForm onAddItem={addItem} />
			</Modal>
    </div>
  )
}

export default Todo