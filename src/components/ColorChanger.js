import React from 'react';
import PropTypes from 'prop-types'

export default function ColorChanger(props) {
  return (
    <select className="dropDownContainer" value={props.fontColor} onChange={event => props.updateColor(event.target.value)} disabled={!props.allowEdit}>
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  )
}

ColorChanger.propTypes = {
  fontColor: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  allowEdit: PropTypes.bool.isRequired,
}