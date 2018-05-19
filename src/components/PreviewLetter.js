import React, { Component } from 'react';
import RenderLetter from './RenderLetter';
import './PreviewLetter.css'

class SelectedLetter extends Component{
  svg = React.createRef();

  componentDidMount(){
    this.props.initLetter(this.svg.current);
  }

  render(){
    return(
      <svg ref={this.svg} className="SelectedLetter" />
    )
  }
}

export default RenderLetter(SelectedLetter);