import React from 'react';
import './Button.css';
import './control.css'



const Button = props => {
  return (
    <div className="Button-container control">
      <p className="Button-name">{props.name}</p>
    </div>
  )
}

export default Button;