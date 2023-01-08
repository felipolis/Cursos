import React from 'react'
import { ContadorContext } from '../ContadorContext'


const Contador = () => {

	const {contagem, setContagem} = React.useContext(ContadorContext)

  return (
    <div>
			<div>{contagem}</div>
			<button onClick={() => {setContagem((anterior) => anterior - 1)}}>-</button>
			<button onClick={() => {setContagem((anterior) => anterior + 1)}}>+</button>
    </div>
  )
}

export default Contador