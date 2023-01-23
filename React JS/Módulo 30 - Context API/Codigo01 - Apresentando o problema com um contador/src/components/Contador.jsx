import React from 'react'

const Contador = () => {

	const [contagem, setContagem] = React.useState(0)


  return (
    <div>
			<div>{contagem}</div>
			<button onClick={() => {setContagem((anterior) => anterior - 1)}}>-</button>
			<button onClick={() => {setContagem((anterior) => anterior + 1)}}>+</button>
    </div>
  )
}

export default Contador