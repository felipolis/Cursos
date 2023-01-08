import React, { useState } from 'react'
import './Todo.css'
import List from './List'

const Todo = () => {

    const [text, setText] = useState('')
    const [items, setItems] = useState([])

    function handleChange(event) {
        let t = event.target.value
        setText(t)
    }

    function addItem(event) {
        event.preventDefault()
        if(text) {
            setItems([...items, text])
            setText('')
        }
    }

  return (
    <div className='container'>
        <h1>Todo List</h1>

        <form action="">
            <input value={text} onChange={handleChange} type="text" />
            <button onClick={addItem}>Add</button>
        </form>

        <List items={items} />

    </div>
  )
}

export default Todo