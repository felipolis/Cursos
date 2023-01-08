import React, { useEffect } from 'react'
import GameOver from './components/GameOver'
import GameBoard from './components/GameBoard'
import game from './game/game'

const MemoryGame = () => {

  const [gameOver, setGameOver] = React.useState(false)
  const [cards, setCards] = React.useState([])

  useEffect(() => {
    setCards(game.createCardsFromTechs())
  }, [])

  function restart() {
    setGameOver(false)
  }

  return (
    <div>
      <GameBoard cards={cards}/>
      <GameOver show={gameOver} handleRestart={restart}/>
    </div>
  )
}

export default MemoryGame