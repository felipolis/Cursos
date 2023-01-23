import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

  const contador = useSelector(state => state)

  return (
    <div className='header'>
			<h1>Contador</h1>
			<div>{contador}</div>
    </div>
  )
}

export default Header