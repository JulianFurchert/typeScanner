import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';
import './Grid.css';

class Grid extends Component {

  constructor(props) {
    super(props);
    this.svg = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(){
    return false;
  }

  componentDidMount(){
    this.initGrid(this.svg.current);
  }

  initGrid(element){
    this.snap = Snap(element);
    this.grid = this.snap.group();

    Snap.load(this.props.gridSvg, (data) =>{
      this.grid.append( data );
    });

    //this.grid.transform("s8 0 0");
  }

  handleClick(){
  }

  render(){
    return(
      <svg onClick={this.handleClick} ref={this.svg} className="Grid"  />
    )
  }
}

export default Grid;