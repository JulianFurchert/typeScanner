import React, { Component } from 'react';
import Grid from './Grid';
import RenderLetter from '../hoc/RenderLetter';
import './SelectedLetter.css'

import { Consumer } from "../context";

class SelectedLetter extends Component{
  constructor(props) {
    super(props);
    this.letter = React.createRef();
  }

  shouldComponentUpdate(){
    return false;
  }

  componentDidMount(){
    this.props.initLetter(this.letter.current);
  }

  render(){
    return(
      <div className="SelectedLetter-container">
        <svg onClick={this.handleClick} ref={this.letter} className="SelectedLetter" />
        <Consumer>
          { ({ gridsSvg, grid, gridSetting }) => <Grid gridsSvg={gridsSvg} grid={grid} gridSetting={gridSetting} /> }
        </Consumer>
      </div>
    )
  }
}

export default RenderLetter(SelectedLetter);