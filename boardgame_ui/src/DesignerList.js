import React, { Component } from 'react'
import DesignerRow from './DesignerRow'
import DesignerCardForm from './DesignerCardForm'

class DesignerList extends Component {
  state = {
    designers: [],
    editing: null
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    fetch('/designers')
      .then(r => r.json())
      .then(data => {
        this.setState({
          designers: data,
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

  render() {
    return (
      <div className="DesignerList">
        <div className="container">
          <h1 className="title">Game Designers</h1>
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th />
                <th>Name</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.designers.map(designer => (
                <DesignerRow
                  {...designer}
                  key={designer.id}
                  onEdit={() => this.showModal(designer.id)}
                />
              ))}
            </tbody>
          </table>
          <nav className="level">
            <div className="level-item">
              <a className="button is-primary" onClick={() => this.showModal()}>
                <span>Add Designer</span>
                <span className="icon is-small">
                  <i className="fas fa-plus" />
                </span>
              </a>
            </div>
          </nav>

          <div className={`modal ${this.state.modalActive ? 'is-active' : ''}`}>
            <div className="modal-background" />
            {this.state.modalActive && (
              <DesignerCardForm
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

export default DesignerList
