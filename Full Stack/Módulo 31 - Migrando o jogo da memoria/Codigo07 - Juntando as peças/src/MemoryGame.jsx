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
    if (game.setCard(card.id)) {
      if (game.secondCard) {
        if (game.checkMatch()) {
          game.clearCards();
            if (game.checkGameOver()) {
              // Game over
              setGameOver(true);
            }
        } else {
          setTimeout(() => {
            // No match
            game.unflipCards();
            setCards([...game.cards])
          }, 1000);
        };
      }
    }
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