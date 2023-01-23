import React from 'react'
import ListItem from './ListItem'

const List = (props) => {

  return (
    <ul>
      {props.items.map(item => 
        <ListItem 
          key={item.id} 
          item={item} 
          onDeleteItem={props.onDeleteItem} 
          onDone={props.onDone} 
        />
      )}
    </ul>
  )
}

export default List