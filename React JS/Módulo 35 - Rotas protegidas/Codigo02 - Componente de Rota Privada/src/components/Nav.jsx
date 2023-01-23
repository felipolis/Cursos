import React from 'react'
import { Link } from 'react-router-dom'
import AuthButton from './AuthButton'


const Nav = () => {
  return (
    <div className='nav'>
        <h1>Archanjo</h1>
        <ul className='nav-links'>
          <li><AuthButton /></li>
          <li><Link to='/aulas'>Aulas</Link></li>
          <li><Link to='/sobre'>Sobre</Link></li>
        </ul>
    </div>
  )
}

export default Nav