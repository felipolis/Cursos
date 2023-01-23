import React, { useEffect, useState } from 'react'
import { Link, useMatch } from 'react-router-dom'
import data from '../data'

const Aulas = () => {

  const match = useMatch('/aulas')

  const [url, setUrl] = useState("")

  useEffect(() => {
    const newUrl = match.pathname.slice(-1) === '/' ? match.pathname.slice(0, -1) : match.pathname
    setUrl(newUrl)
  }, [match])

  return (
    <div className='page'>
      <h1>Aulas</h1>
      <ul className='aulas'>
        {data.map((aula) => 
          <li key={aula.id}>
            <Link className='link' to={`${url}/${aula.id}`}>
              {aula.title}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Aulas