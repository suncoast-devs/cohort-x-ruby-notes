import React from 'react'

const DesignerRow = props => (
  <tr className="DesignerRow">
    <td>
      {props.photo_url && (
        <figure
          className="avatar"
          style={{ backgroundImage: `url(${props.photo_url})` }}
        />
      )}
    </td>
    <td>{props.name}</td>
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

export default DesignerRow
