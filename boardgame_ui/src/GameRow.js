import React from 'react'

const GameRow = props => (
  <tr className="GameRow">
    <td>{props.name}</td>
    <td>{props.min_players}</td>
    <td>{props.min_duration}</td>
    <td>{props.min_age}</td>
  </tr>
)

export default GameRow
