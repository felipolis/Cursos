import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Contador = () => {

  // O useSelector é um hook que pega o estado do redux e retorna ele para o componente
  const contador = useSelector(state => state.counter)

  const dispatch = useDispatch()

  return (
    <div>
			<div>{contador}</div>
			<button onClick={() => { dispatch({type:'DECREMENT'}) }}>-</button>
			<button onClick={() => { dispatch({type:'INCREMENT'}) }}>+</button>
    </div>
  )
}

export default Contador