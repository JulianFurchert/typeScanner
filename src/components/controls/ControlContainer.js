import React from 'react';
import './ControlContainer.css';

const ControlContainer = props => {
  return (
    <div className="ControlContainer">
      {props.children}
    </div>
  )
}

export default ControlContainer;