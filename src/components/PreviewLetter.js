import React, { Component } from 'react';
import { Consumer } from "../context";
import RenderLetter from './RenderLetter';
import Artboard from './Artboard'
import Grid from './Grid';
import './PreviewLetter.css'

class SelectedLetter extends Component{
  svg = React.createRef();

  componentDidMount(){
    this.props.initLetter(this.svg.current);
  }

  render(){
    return(
      <Artboard>
        <svg ref={this.svg} className="SelectedLetter" />
        <Consumer>
          {({ gridsSvg, grid, gridSetting }) => (
            <Grid gridSvg={gridsSvg[grid]} {...gridSetting}/>
          )}
        </Consumer>
      </Artboard>
    )
  }
}

export default RenderLetter(SelectedLetter);