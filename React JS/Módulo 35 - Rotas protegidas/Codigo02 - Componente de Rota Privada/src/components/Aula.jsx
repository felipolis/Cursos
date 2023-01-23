import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data'

function useAula() {
    const id = parseInt(useParams().id)
    return data.find((aula) => aula.id === id)
}

const Aula = () => {
    const aula = useAula()


  return (
    <div className='page'>
        <h1>{aula.title}</h1>
        <h3>{aula.desc}</h3>
    </div>
  )
}

export default Aula