import React from 'react'
import Menu from './Menu'

class Header extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<header className='header'>
				<h1>{this.props.name}</h1>
				<Menu links={this.props.links} />
			</header>
		)
	}
}



export default Header