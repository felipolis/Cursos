import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AuthButton from './AuthButton'


const Nav = () => {

  const login = useSelector(state => state)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    let { from } = location.state || { from: { pathname: '/' } }
    if (login) {
      navigate(from, { replace: true })
    }
  }, [login])

  return (
    <div className='nav'>
        <h1>Archanjo</h1>
        <ul className='nav-links'>
          <AuthButton />
          <li><Link to='/aulas'>Aulas</Link></li>
          <li><Link to='/sobre'>Sobre</Link></li>
        </ul>
    </div>
  )
}

export default Nav