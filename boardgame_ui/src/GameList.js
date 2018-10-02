import React, { Component } from 'react'
import GameRow from './GameRow'
import GameCardForm from './GameCardForm'

class GameList extends Component {
  state = {
    games: [],
    editing: null
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

  showModal = id => {
    this.setState({ modalActive: true, editing: id })
  }

  hideModal = () => {
    this.setState({ modalActive: false, editing: null })
  }

  deleteGame(id) {
    fetch(`/games/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      this.loadData()
    })
  }

  render() {
    return (
      <div className="GameList">
        <div className="container">
          <h1 className="title">Board Games</h1>
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th />
                <th>Name</th>
                <th>Players</th>
                <th>Duration</th>
                <th>Age</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.games.map(game => (
                <GameRow
                  {...game}
                  key={game.id}
                  onEdit={() => this.showModal(game.id)}
                  onDelete={() => this.deleteGame(game.id)}
                />
              ))}
            </tbody>
          </table>
          <nav className="level">
            <div className="level-item">
              <a className="button is-primary" onClick={() => this.showModal()}>
                <span>Add Game</span>
                <span className="icon is-small">
                  <i className="fas fa-plus" />
                </span>
              </a>
            </div>
          </nav>

          <div className={`modal ${this.state.modalActive ? 'is-active' : ''}`}>
            <div className="modal-background" />
            {this.state.modalActive && (
              <GameCardForm
                editing={this.state.editing}
                onClose={this.hideModal}
                onCreated={this.loadData}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default GameList
