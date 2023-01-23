import React from 'react'

const CardElement = (props) => {

  return (
    <div onClick={() => {props.onHandleFlip(props.card)}} id={props.card.id} className={`card ${props.card.flipped ? "flip" : ""}`}>
      <div className='card_front'>
        <img 
          src={`assets/images/${props.card.icon}.png`} 
          alt={props.card.icon} 
          className='icon'/>
      </div>

      <div className='card_back'>
        {"</>"}
      </div>
      
    </div>
  )
}

export default CardElement