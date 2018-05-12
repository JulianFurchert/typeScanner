import React from 'react';
import './Artboard.css';

const Artboard = (props) => {
  return(
    <div className={`Artboard ${props.artboard}`}>
      {props.children}
    </div>
  )
}

export default Artboard;