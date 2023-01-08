import React, { useState } from 'react'
import './Todo.css'
import List from './List'
import TodoForm from './TodoForm'

const Todo = () => {

	const [items, setItems] = useState([])

	function addItem(item) {
		setItems([...items, item])
	}

  return (
    <div className='container'>
			<h1>Todo List</h1>
			<TodoForm onAddItem={addItem} />
			<List items={items} />
    </div>
  )
}

export default Todo