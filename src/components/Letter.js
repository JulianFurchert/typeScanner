import React, { Component } from 'react';
import RenderLetter from './RenderLetter';
import './Letter.css';

class Letter extends Component {
  svg = React.createRef();

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

  render(){
    return <svg ref={this.svg}  className="Letter"/>
  }
}

export default RenderLetter(Letter);