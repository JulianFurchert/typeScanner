import React, { Component } from 'react';
import RenderLetter from './RenderLetter';
import './Letter.css';

class Letter extends Component {

  constructor(props){
    super(props);
    this.svg = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.initLetter(this.svg.current);
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount(){
    // window.removeEventListener("resize",this.updateDimensions.bind(this));
  }

  updateDimensions(){
    let width = this.svg.current.getBoundingClientRect().width;
    this.svg.current.style.height = width;
  }

  handleClick(){
    this.props.setPreviewLetter(this.props.letterName);
  }

  render(){
    return <svg onClick={this.handleClick}  ref={this.svg}  className="Letter"/>
  }
}

export default RenderLetter(Letter);