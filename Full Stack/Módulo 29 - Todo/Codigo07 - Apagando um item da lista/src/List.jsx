import React from 'react'

const List = (props) => {

  return (
    <ul>
        {props.items.map(item => 
          <li key={item.id}>
            {item.text}
            <button onClick={() => {props.onDeleteItem(item)}}>
              <img src="./assets/bin.png" alt='bin' />
            </button>
          </li>
        )}
    </ul>
  )
}

export default List