import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Button from './controls/Button';
import closeIcon from '../data/icons/icon_close.svg';
import './Modal.css';

const modalRoot = document.getElementById('modal-root');



class Modal extends Component {

  constructor(props){
    super(props);
    this.modalContainer = React.createRef();
  }

  updateScrollPosition(){
    let elmnt = document.getElementById(this.props.scrollTo);
    elmnt.scrollIntoView();
    this.modalContainer.current.scrollBy(0, -56);
  }

  modal(){
    return(
      <CSSTransition
        // unmountOnExit
        in={this.props.open}
        timeout={{ enter: 100, exit: 400 }}
        classNames="modal-container"
      >
      { state => (
        <div ref={this.modalContainer} className="Modal-container">
        <CSSTransition
          // unmountOnExit
          in={state === 'entered' || state === 'entering'}
          timeout={{ enter: 300, exit: 300 }}
          classNames="modal"
          onEntered={() => {
            this.updateScrollPosition();
          }}
        >
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
        </CSSTransition>
      </div>
      )}
      </CSSTransition>
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