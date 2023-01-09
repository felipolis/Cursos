import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import data from '../data'

const Aulas = () => {

  const match = useMatch('/aulas')
  console.log(match)

  return (
    <div className='page'>
      <h1>Aulas</h1>
      <ul className='aulas'>
        {data.map((aula) => 
          <li key={aula.id}>
            <Link className='link' to={`${match.pathname}/${aula.id}`}>
              {aula.title}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Aulas