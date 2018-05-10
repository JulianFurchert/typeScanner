import React, { Component } from 'react';
import Grid from './Grid';
import RenderLetter from './RenderLetter';
import typeScanner from '../helper/typeScanner';
import './SelectedLetter.css'

class SelectedLetter extends Component{
  constructor(props) {
    super(props);
    this.svg = React.createRef();
  }

  shouldComponentUpdate(){
    return false;
  }

  componentDidMount(){
    this.props.initLetter(this.svg.current);
    let newLetterJson = typeScanner(this.props.letterJson, this.props.gridJson)
    this.props.updateLetter(newLetterJson);
  }



  render(){
    return(
      <div className="SelectedLetter-container">
        <svg onClick={this.handleClick} ref={this.svg} className="SelectedLetter" />
        <Grid
          grid={this.props.grid}
          gridJson={this.props.gridJson}
          gridSvg={this.props.gridSvg}
          gridSetting={this.props.gridSetting}
        />
      </div>
    )
  }
}

export default RenderLetter(SelectedLetter);