import React from 'react'
import Card from './Card'


const DoneImg = (props) => {
  if (props.done) {
    return <img src="./assets/on.png" alt='done' />
  } else {
    return <img src="./assets/off.png" alt='undone' />
  }
}

const List = (props) => {

  return (
    <ul>
      {props.items.map(item => 
        <li key={item.id}>
          <Card className={item.done ? "done item" : "item"}>
            {item.text}
            <div>
              <button onClick={() => {props.onDone(item)}}>
                <DoneImg done={item.done} />
              </button>
              <button onClick={() => {props.onDeleteItem(item)}}>
                <img src="./assets/bin.png" alt='bin' />
              </button>
            </div>
          </Card>
        </li>
      )}
    </ul>
  )
}

export default List