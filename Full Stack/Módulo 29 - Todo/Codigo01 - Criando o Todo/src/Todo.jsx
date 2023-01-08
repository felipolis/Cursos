import React from 'react'
import './Todo.css'

const Todo = () => {
  return (
    <div className='container'>
        <h1>Todo List</h1>

        <form action="">
            <input type="text" />
            <button>Add</button>
        </form>

        <ul>
            <li>item</li>
        </ul>
    </div>
  )
}

export default Todo