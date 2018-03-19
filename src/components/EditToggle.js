import React from 'react';
import PropTypes from 'prop-types';

export default function EditToggle(props) {
  return (
    <select className="dropDownContainer ml0" value={props.allowEdit} onChange={event => props.update(event.target.value === 'true')}>
      <option value="true"> Allow Edit </option>
      <option value="false"> Disable Edit </option>
    </select>
  )
}

EditToggle.PropTypes = {
  allowEdit: PropTypes.bool.isRequired,
  update: PropTypes.func.isRequired,
}