import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data'

const Aula = () => {
    const params = useParams()
    const [aula, setAula] = useState({})

    useEffect(() => {
        let newAula = data.find((aula) => aula.id === parseInt(params.id))
        setAula(newAula)
    }, [params])


  return (
    <div className='page'>
        <h1>{aula.title}</h1>
        <h3>{aula.desc}</h3>
    </div>
  )
}

export default Aula