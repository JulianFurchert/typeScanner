import React from 'react';
import Button from './controls/Button';
import closeIcon from '../data/icons/icon_close.svg';
import './Modal.css';


const Modal = props => {
  return(
    <div className="Modal-container">
      <div className="Modal">
        <div className="Modal-header">
          <h4 className="Modal-header-title">props.title</h4>
          <Button
            circle
            icon={closeIcon}
            onClick={props.close}
          />
        </div>
        <div className="Modal-body">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Modal;