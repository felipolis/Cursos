import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction, logoutAction } from '../actions/loginActions'


const AuthButton = () => {

	const login = useSelector(state => state)
	const dispatch = useDispatch()


  return (
    login ?
			<button onClick={() => {dispatch(logoutAction())}}>
					logout
			</button>
    :
			<button onClick={() => {dispatch(loginAction())}}>
					login
			</button>
  )
}

export default AuthButton 