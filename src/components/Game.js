import React from 'react'
import './Game.css'

export default class Game extends React.Component {
  constructor() {
    super()

    this.state = {
      played: false
    }
  }

  playGame = () => {
    this.setState({
      played: true
    })

  }

  render() {
    const game = this.props.game

    console.log(this.props)
    return (
      <div className='card'>
        <img src={game.cover} className='cover' alt={game.title}></img>
        <h3>{game.title}</h3>
        <p>Genres: {game.genre.join(', ')}</p>
        {!this.state.played
          ? <button className='play-btn' onClick={this.playGame}>Play Game</button>
          : <button className='played-btn'>Game Played</button>
        }
      </div>

    )
  }
}
