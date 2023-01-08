import React, { useContext } from 'react'
import { ContadorContext } from '../ContadorContext'

const Header = () => {

	const { contagem } = useContext(ContadorContext)


  return (
    <div className='header'>
			<h1>Contador</h1>
			<div>{contagem}</div>
    </div>
  )
}

export default Header