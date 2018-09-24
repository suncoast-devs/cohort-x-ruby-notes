import React, { Component } from 'react'
import GameList from './GameList'
import DesignerList from './DesignerList'
import NavigationLink from './NavigationLink'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <section className="hero is-primary">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">Boardgame Library</h1>
                <h2 className="subtitle">A library of boardgames.</h2>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <nav className="navigation">
                <div className="tabs">
                  <ul>
                    <NavigationLink exact to="/" label="Games" />
                    <NavigationLink to="/designers" label="Designers" />
                  </ul>
                </div>
              </nav>
            </div>
          </section>
          <Switch>
            <Route path="/" exact component={GameList} />
            <Route path="/designers" component={DesignerList} />
          </Switch>
          <footer className="footer">
            <div className="content has-text-centered">
              <p>
                Made with{' '}
                <span role="img" aria-label="love">
                  ❤️
                </span>{' '}
                in St Petersburg, FL.
              </p>
            </div>
          </footer>
        </div>
      </Router>
    )
  }
}

export default App
