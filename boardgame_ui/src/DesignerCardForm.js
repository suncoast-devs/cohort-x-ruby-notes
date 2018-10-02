import React, { Component } from 'react'

class DesignerCardForm extends Component {
  state = {
    name: '',
    photo_url: ''
  }

  componentDidMount() {
    if (this.props.editing) {
      fetch(`/designers/${this.props.editing}`)
        .then(r => r.json())
        .then(data => {
          this.setState({
            name: data.name,
            photo_url: data.photo_url || ''
          })
        })
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    if (this.props.editing) {
      this.update()
    } else {
      this.create()
    }
  }

  update() {
    const { name, photo_url } = this.state
    fetch(`/designers/${this.props.editing}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        designer: { name, photo_url }
      })
    })
      .then(r => r.json())
      .then(response => {
        this.props.onClose()
        this.props.onCreated()
      })
  }

  create() {
    const { name, photo_url } = this.state
    fetch('/designers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        designer: { name, photo_url }
      })
    })
      .then(r => r.json())
      .then(response => {
        this.props.onClose()
        this.props.onCreated()
      })
  }

  render() {
    return (
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            {this.props.editing ? 'Update Designer' : 'Add New Designer'}
          </p>
          <button
            className="delete"
            aria-label="close"
            onClick={this.props.onClose}
          />
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Name of the designer"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Photo URL</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Photo of the designer"
                value={this.state.photo_url}
                name="photo_url"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={this.handleSubmit}>
            {this.props.editing ? 'Update' : 'Create'}
          </button>
          <button className="button" onClick={this.props.onClose}>
            Cancel
          </button>
        </footer>
      </div>
    )
  }
}

export default DesignerCardForm
