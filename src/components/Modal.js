import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import posed, { PoseGroup } from 'react-pose';
import './Modal.css';

const portalRoot = document.getElementById('portal');

const AnimatedModal = posed.div({
  enter: {
    y: 0,
    transition: {
      default: { duration: 400 }
    }
  },
  exit: {
    y: '100vh',
    transition: { duration: 0 }
  }
});


class Modal extends Component {

  modal(){
    return(
      <PoseGroup>
        {this.props.open && (
          <AnimatedModal key="modal" className="Modal">
            { this.props.children}
          </AnimatedModal>
        )}
      </PoseGroup>
    )
  }

  render(){
    return ReactDOM.createPortal(
      this.modal(),
      portalRoot,
    );
  }
}

export default Modal;