import React from 'react'

const GameRow = props => (
  <tr className="GameRow">
    <td>
      {props.photo_url && (
        <figure
          className="boxart"
          style={{ backgroundImage: `url(${props.photo_url})` }}
        />
      )}
    </td>
    <td>{props.name}</td>
    <td>{props.min_players}</td>
    <td>{props.min_duration}</td>
    <td>{props.min_age}</td>
    <td>
      <a className="button" onClick={props.onEdit}>
        <span className="icon is-small">
          <i className="fas fa-edit" />
        </span>
      </a>
      <a className="button" onClick={props.onDelete}>
        <span className="icon is-small">
          <i className="fas fa-trash" />
        </span>
      </a>
    </td>
  </tr>
)

export default GameRow
