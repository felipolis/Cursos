import React, { useState } from 'react'
import './Todo.css'
import List from './components/List'
import TodoForm from './components/TodoForm'
import Item from './models/Item'

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
			<h1>Todo List</h1>
			<TodoForm onAddItem={addItem} />
			<List items={items} onDeleteItem={deleteItem} onDone={done}/>
    </div>
  )
}

export default Todo