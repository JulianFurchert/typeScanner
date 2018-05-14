import React from 'react';
import './SelectGrid.css'
import './control.css'

const SelectGrid = props => {
  return (
    <div className="SelectGrid-container control">
      <p className="SelectGrid-name">{props.name}</p>
    </div>
  )
}

export default SelectGrid;