import React, { useState } from 'react'
import './Todo.css'
import List from './List'
import TodoForm from './TodoForm'
import Item from './Item'

const Todo = () => {

	const [items, setItems] = useState([])

	function addItem(text) {
		let it = new Item(text)
		setItems([...items, it])
	}

	function deleteItem(item) {
		let newItems = items.filter(i => i.id !== item.id)
		setItems(newItems)
	}

  return (
    <div className='container'>
			<h1>Todo List</h1>
			<TodoForm onAddItem={addItem} />
			<List items={items} onDeleteItem={deleteItem} />
    </div>
  )
}

export default Todo