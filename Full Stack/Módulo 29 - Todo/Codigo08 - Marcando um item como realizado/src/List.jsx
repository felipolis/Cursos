import React from 'react'


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
        <li className={item.done ? "done" : ""} key={item.id}>
          {item.text}
          <button onClick={() => {props.onDone(item)}}>
            <DoneImg done={item.done} />
          </button>
          <button onClick={() => {props.onDeleteItem(item)}}>
            <img src="./assets/bin.png" alt='bin' />
          </button>
        </li>
      )}
    </ul>
  )
}

export default List