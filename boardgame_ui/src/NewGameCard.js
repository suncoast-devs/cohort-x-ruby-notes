import React, { Component } from "react";

class NewGameCard extends Component {
  state = {
    name: "",
    description: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { name, description } = this.state;
    fetch("/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        game: { name, description }
      })
    })
      .then(r => r.json())
      .then(response => {
        this.props.onClose();
        this.props.onCreated();
      });
  };

  render() {
    return (
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Add New Game</p>
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
                placeholder="Name of the game"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="What's this game about?"
                value={this.state.description}
                name="description"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={this.handleSubmit}>
            Save changes
          </button>
          <button className="button" onClick={this.props.onClose}>
            Cancel
          </button>
        </footer>
      </div>
    );
  }
}

export default NewGameCard;
