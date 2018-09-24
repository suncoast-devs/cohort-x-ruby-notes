import React from 'react'
import { Route, Link } from 'react-router-dom'

const NavigationLink = ({ label, to, exact }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => (
      <li className={match ? 'is-active' : ''}>
        <Link to={to}>{label}</Link>
      </li>
    )}
  />
)

export default NavigationLink
