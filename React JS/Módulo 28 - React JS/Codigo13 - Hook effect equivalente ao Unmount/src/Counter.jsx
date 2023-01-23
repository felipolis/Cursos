import React, { useEffect, useState } from 'react'

// METODO COM HOOKS
function Counter(props) {

	const [count, setCount] = useState(props.count) // define o estado inicial do componente

	useEffect(() => {
		setCount(parseInt(localStorage.getItem('count')))

		return () => {
			console.log('Não tem mais contador!')
		} // Executa quando o componente for desmontado
	}, []) // Executa quando o componente for montado

	useEffect(() => {
		document.title = `Counter: ${count}`
		localStorage.setItem('count', count)
		console.log(count)
	}, [count, props.count]) // Executa quando as variaveis do array forem alteradas

	function add() {
		setCount(count + 1)
	}

	return (
		<div>
			<h1>Counter: {count}</h1>
			<button onClick={add}>Add</button>
		</div>
	)
}

export default Counter


/* METODO SEM HOOKS
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
		})

	}

	// Metodo que determina se o componente deve ser atualizado ou nao
	shouldComponentUpdate(){
		return true
	}

	// Metodo que executa antes do componente ser desmontado
	componentWillUnmount(){
		console.log('Componente desmontado')
	}

	// Metodo que executa depois que o componente for montado
	componentDidMount(){
		document.title = `Counter: ${this.state.count}`
		console.log('Componente montado')
		this.setState(JSON.parse(localStorage.getItem('state')))
	}

	// Metodo que executa depois que o componente for atualizado
	componentDidUpdate(){
		document.title = `Counter: ${this.state.count}`
		localStorage.setItem('state', JSON.stringify(this.state))
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

export default Counter
*/
