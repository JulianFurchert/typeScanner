import React, {Component} from 'react';
import classNames from 'classnames';
import './Button.css';
import './control.css'

class Button extends Component {
  render(){
    let {name, icon, loading, large, circle} = this.props;
    let btnClass = classNames('Button control',{
      'Button-space-between': icon && name,
      'Button-large': large,
      'Button-circle': circle,
      'Button-loading': loading,
    });
    return (
      <div onClick={this.props.onClick} className={btnClass}>
        { name ? <p className="Button-name">{name}</p> : null }
        { icon ? <img className="Button-icon" src={icon} alt="icon"/> : null }
      </div>
    )
  }
}

export default Button;