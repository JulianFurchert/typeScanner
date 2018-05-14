import React from 'react';
import ControlContainer from './ControlContainer'
import './Button.css';


const Button = props => {
  return (
    <ControlContainer>
        <p className="Button-name">{props.name}</p>
    </ControlContainer>
  )
}

export default Button;