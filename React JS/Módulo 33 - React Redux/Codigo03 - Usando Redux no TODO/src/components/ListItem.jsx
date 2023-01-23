import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { changeDone, deleteItem } from '../actions/listAction'

const DoneImg = (props) => {
    if (props.done) {
      return <img src="./assets/on.png" alt='done' />
    } else {
      return <img src="./assets/off.png" alt='undone' />
    }
  }

const ListItem = (props) => {

	const dispatch = useDispatch()

  return (
    <li>
			<Card className={props.item.done ? "done item" : "item"}>
				{props.item.text}
				<div>
					<button onClick={() => {dispatch(changeDone(props.item.id))}}>
						<DoneImg done={props.item.done} />
					</button>
					<button onClick={() => {dispatch(deleteItem(props.item.id))}}>
						<img src="./assets/bin.png" alt='bin' />
					</button>
				</div>
			</Card>
		</li>
  )
}

export default ListItem