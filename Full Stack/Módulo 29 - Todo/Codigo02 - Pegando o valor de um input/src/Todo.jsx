import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {

    const [text, setText] = useState('')

    function handleChange(event) {
        let t = event.target.value
        setText(t)
    }

  return (
    <div className='container'>
        <h1>Todo List</h1>

        <form action="">
            <input onChange={handleChange} type="text" />
            <button>Add</button>
        </form>

        <ul>
            <li>{text}</li>
        </ul>
    </div>
  )
}

export default Todo