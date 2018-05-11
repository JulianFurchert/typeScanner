import React, { Component } from 'react';
import RenderLetter from './RenderLetter';
import './Letter.css';

class Letter extends Component {
  constructor(props) {
    super(props);
    this.svg = React.createRef();
  }

  shouldComponentUpdate(){
    return false;
  }

  componentDidMount(){
    this.props.initLetter(this.svg.current);
  }

  render(){
    return(
      <svg ref={ this.svg }  className="Letter"/>
    )
  }
}

export default RenderLetter(Letter);