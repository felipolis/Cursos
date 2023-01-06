import React, { useState } from 'react'

const Counter = (props) => {

	const [count, setCount] = useState(props.count)

	function add() {
		setCount(count + 1)
		console.log("Add")
	}

	return (
		<div>
			<h1>Counter: {count}</h1>
			<button onClick={add}>Add</button>
		</div>
	)
}

export default Counter

/*
class Counter extends React.Component {

	// Metodo construtor que recebe as props
	constructor(props) { 
		super(props)
		this.state = {
			count: 0
		}
		this.add = this.add.bind(this)
	}

	add() {
		this.setState((state) => {
			return {
				count: state.count + 1
			}
		}, () => {
			console.log(this.state)
			localStorage.setItem('state', JSON.stringify(this.state))
		})

	}

	// Metodo que determina se o componente deve ser atualizado ou nao
	shouldComponentUpdate(){
		return true
	}

	// Metodo que executa antes do componente ser removido ou desmontado
	componentWillUnmount(){
		console.log('Componente desmontado')
	}

	// Metodo que executa depois que o componente for atualizado
	componentDidMount(){
		this.setState(JSON.parse(localStorage.getItem('state')))
	}

	// Metodo render que retorna o JSX
	render() {
		return (
			<div>
				<h1>Counter: {this.state.count}</h1>
				<button onClick={this.add}>Add</button>
			</div>
		)
	}
} 
*/

