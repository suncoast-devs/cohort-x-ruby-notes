import React, { Component } from 'react'
import GameRow from './GameRow'
import NewGameCard from './NewGameCard'

class GameList extends Component {
  state = {
    games: []
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    fetch('/games')
      .then(r => r.json())
      .then(data => {
        this.setState({
          games: data,
          modalActive: false
        })
      })
  }

  showModal = () => {
    this.setState({ modalActive: true })
  }

  hideModal = () => {
    this.setState({ modalActive: false })
  }

  render() {
    return (
      <div className="GameList">
        <div className="container">
          <h1 className="title">Board Games</h1>
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>Name</th>
                <th>Players</th>
                <th>Duration</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {this.state.games.map(game => (
                <GameRow {...game} key={game.id} />
              ))}
            </tbody>
          </table>
          <nav className="level">
            <div className="level-item">
              <a className="button is-primary" onClick={this.showModal}>
                <span>Add Game</span>
                <span className="icon is-small">
                  <i className="fas fa-plus" />
                </span>
              </a>
            </div>
          </nav>

          <div className={`modal ${this.state.modalActive ? 'is-active' : ''}`}>
            <div className="modal-background" />
            <NewGameCard onClose={this.hideModal} onCreated={this.loadData} />
          </div>
        </div>
      </div>
    )
  }
}

export default GameList
