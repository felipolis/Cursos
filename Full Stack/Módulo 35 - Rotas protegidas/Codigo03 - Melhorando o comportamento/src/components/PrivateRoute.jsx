import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

	const login = useSelector(state => state)

	return login ? children : <Navigate to="/negado" />
}

export default PrivateRoute