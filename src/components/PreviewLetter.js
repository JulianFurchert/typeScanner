import React, { Component } from 'react';
import RenderLetter from './RenderLetter';
import './PreviewLetter.css'
import placeholder from '../data/placeholder-grid.jpg';

class SelectedLetter extends Component{
  svg = React.createRef();

  componentDidMount(){
    this.props.initLetter(this.svg.current);
  }

  render(){
    return(
      <div className="PreviewLetter-container">
        <svg ref={this.svg} className="PreviewLetter" />
        <img alt="placeholder" className="PreviewLetter-placeholder" src={placeholder} />
      </div>
    )
  }
}

export default RenderLetter(SelectedLetter);