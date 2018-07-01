import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from './controls/Button';
import closeIcon from '../data/icons/icon_close.svg';
import './Modal.css';

const modalRoot = document.getElementById('modal-root');


class Modal extends Component {
  modal(){
    return(
      <div className="Modal-container">
        <div className="Modal">
          <div className="Modal-header">
            <h4 className="Modal-header-title">{this.props.title}</h4>
            <Button
              circle
              icon={closeIcon}
              onClick={this.props.close}
            />
          </div>
          <div className="Modal-body">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

  render(){
    return ReactDOM.createPortal(
      this.modal(),
      modalRoot,
    );
  }
}

export default Modal;