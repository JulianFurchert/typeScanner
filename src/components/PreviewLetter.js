import React, { Component } from 'react';
import RenderLetter from './RenderLetter';
import { Consumer } from "../context";
import Grid from './Grid';
import './PreviewLetter.css'

class SelectedLetter extends Component{
  svg = React.createRef();

  componentDidMount(){
    this.props.initLetter(this.svg.current);
  }

  render(){
    return(
      <div className="SelectedLetter-container">
        <svg ref={this.svg} className="SelectedLetter" />
        <Consumer>
          {({ gridsSvg, grid, gridSetting }) => (
            <Grid gridSvg={gridsSvg[grid]} {...gridSetting}/>
          )}
        </Consumer>
      </div>
    )
  }
}

export default RenderLetter(SelectedLetter);