import React from 'react'
import GameOver from './components/GameOver'

const MemoryGame = () => {

  const [gameOver, setGameOver] = React.useState(false)

  function restart() {
    setGameOver(false)
  }

  return (
    <div>
      <GameOver show={gameOver} handleRestart={restart}/>
    </div>
  )
}

export default MemoryGame