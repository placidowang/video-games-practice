import React from 'react'
import './Filter.css'

export default class Filters extends React.Component {
  render() {
    return (
      <div className="ui form">
        <h3>Game genre</h3>
        <div className="field">
          <select name="type" className='filter' id="type"
            onChange={(e) => this.props.changeFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="first-person shooter">First-person shooter</option>
            <option value="role-Playing game">RPG</option>
            <option value="social simulation">Social simulation</option>
            <option value="stealth">Stealth</option>
            <option value="battle royale">Battle royale</option>
            <option value="action adventure">Action adventure</option>
            <option value="MOBA">MOBA</option>
          </select>
        </div>
        <div className="field">
          <button className="ui secondary button"
          onClick={this.props.filterGames}>
            Find games</button>
        </div>
      </div>
    )
  }
}