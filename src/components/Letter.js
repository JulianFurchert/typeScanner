import React, { Component } from 'react';
import RenderLetter from './RenderLetter';
import placeholder from '../data/images/placeholder_square.jpg';

import './Letter.css';

class Letter extends Component {

  constructor(props){
    super(props);
    this.svg = React.createRef();
    this.container = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.initLetter(this.svg.current);
  }



  handleClick(){
    // this.props.setPreviewLetter(this.props.letterName);
  }

  render(){
    return (
      <div  ref={this.container}  className="Letter-container" >
        <div className="Letter-inner">
          <svg onClick={this.handleClick}  ref={this.svg}  className="Letter"/>
          <img alt="placeholder" className="Letter-placeholder" src={placeholder} />
        </div>
      </div>
    )
  }
}

export default RenderLetter(Letter);