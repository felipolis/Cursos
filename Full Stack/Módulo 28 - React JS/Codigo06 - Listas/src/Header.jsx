import React from 'react'
import Menu from './Menu'

const Header = (props) => {
	return (
		<header className='header'>
			<h1>{props.name}</h1>
			<Menu links={props.links} />
		</header>
	)
}



export default Header