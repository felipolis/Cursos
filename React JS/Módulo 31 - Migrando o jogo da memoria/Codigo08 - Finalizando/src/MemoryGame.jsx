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
    game.clearCards()
    setCards(game.createCardsFromTechs())
    setGameOver(false)
  }

  function handleFlip(card) {
    game.flipCard(card.id, () => {
      // Game over callback
      setGameOver(true)
    }, () => {
      // No match callback
      setCards([...game.cards])
    })
    setCards([...game.cards])
  }

  return (
    <div>
      <GameBoard onHandleFlip={handleFlip} cards={cards}/>
      <GameOver show={gameOver} handleRestart={restart}/>
    </div>
  )
}

export default MemoryGame