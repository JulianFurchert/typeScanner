import React, {Component} from 'react';
import './Button.css';
import './control.css'



class Button extends Component {
  render(){
    return (
      <div onClick={this.props.onClick} className="Button-container control">
        <p className="Button-name">{this.props.name}</p>
      </div>
    )
  }
}

export default Button;