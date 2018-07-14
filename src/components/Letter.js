import React, { Component } from 'react';
import RenderLetter from './RenderLetter';
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
    this.setHeight();
    window.addEventListener("resize", this.setHeight.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setHeight.bind(this));
  }

  setHeight(){
    let width = this.container.current.getBoundingClientRect().width;
    this.container.current.style.height = width + "px";
  }


  handleClick(){
    this.props.setPreviewLetter(this.props.letterName);
  }

  render(){
    return (
      <div  ref={this.container}  className="Letter-container" >
        <div className="Letter-inner">
          <svg onClick={this.handleClick}  ref={this.svg}  className="Letter"/>
        </div>
      </div>
    )
  }
}

export default RenderLetter(Letter);