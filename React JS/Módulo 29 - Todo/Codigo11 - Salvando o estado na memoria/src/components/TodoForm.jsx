import React, { useState } from 'react'

const TodoForm = (props) => {
  const [text, setText] = useState('')

	function handleChange(event) {
		let t = event.target.value
		setText(t)
	}

	function addItem(event) {
		event.preventDefault()
		if(text) {
			props.onAddItem(text)
			setText('')
		}
	}

	return (
		<form action="">
			<input value={text} onChange={handleChange} type="text" />
			<button onClick={addItem}>Add</button>
		</form>
	)
}

export default TodoForm