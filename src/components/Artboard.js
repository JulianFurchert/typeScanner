import React from 'react';
import './Artboard.css';

const Artboard = (props) => {
  return(
    <div className="Artboard-container">
      <div className="Artboard">
        {props.children}
      </div>
    </div>
  )
}

export default Artboard;