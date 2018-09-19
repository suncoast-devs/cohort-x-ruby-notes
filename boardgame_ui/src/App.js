import React, { Component } from "react";
import GameList from "./GameList";

class App extends Component {
  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Boardgame Library</h1>
              <h2 className="subtitle">A library of boardgames.</h2>
            </div>
          </div>
        </section>
        <GameList />
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              Made with{" "}
              <span role="img" aria-label="love">
                ❤️
              </span>{" "}
              in St Petersburg, FL.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
