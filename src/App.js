import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Filters from './components/Filters.js'
import Game from './components/Game.js'
import games from './data/games.js'

class App extends React.Component {
  // constructor() {
  //   super()
  // }

  // playGame = (gameId) => {
  //   games.map(game => {
  //     if (gameId === game.id) {
  //       // console.log(this)
  //       this.setState({
  //         played: true
  //       })
  //     }
  //     return game
  //   })
  // }

  render() {
    // console.log(games)
    return (
      <div>
        <Filters />
        {games.map(game => <Game game={game}/>)}
      </div>
    )
  }
}

export default App;
