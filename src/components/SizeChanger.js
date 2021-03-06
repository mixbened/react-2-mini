import React from 'react';

export default function SizeChanger(props) {
  return (
    <select className="dropDownContainer" value={props.fontSize} onChange={event => props.updateSize(parseInt(event.target.value, 10))}  disabled={!props.allowEdit}>
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  )
}