import React from 'react'

const List = (props) => {
  return (
    <ul>
        {props.items.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
  )
}

export default List