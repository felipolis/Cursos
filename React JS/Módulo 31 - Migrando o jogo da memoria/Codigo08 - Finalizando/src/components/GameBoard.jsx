import React from 'react'
import CardElement from './CardElement'

const GameBoard = (props) => {
  return (
    <div id="gameBoard">
      {props.cards.map((card, index) => 
        <CardElement onHandleFlip={props.onHandleFlip} key={index} card={card} />
      )}
    </div>
  )
}

export default GameBoard