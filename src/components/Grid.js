import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';
import './Grid.css';
import gridsSvg from "../data/grids-svg";
const baseScale = 3;

class Grid extends Component {

  constructor(props) {
    super(props);
    this.svg = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(){
    return false;
  }

  componentWillReceiveProps(newProps){
    if(newProps.zoom !== this.props.zoom || newProps.xPos !== this.props.xPos ||  newProps.yPos !== this.props.yPos ){
      let zoom = baseScale * newProps.zoom;
      let xZoomShift = ( 1100 * newProps.zoom - 1100 ) / -2;
      let yZoomShift = ( 1400 * newProps.zoom - 1400 ) / -2;
      let xShift = xZoomShift + (newProps.xPos * zoom);
      let yShift = yZoomShift + (newProps.yPos * zoom);
      this.grid.transform(`t${xShift} ${yShift} s${zoom} 0 0`);
    }
    if(newProps.grid  !== this.props.grid ) {
      this.loadGrid(gridsSvg[newProps.grid]);
    }
  }

  componentDidMount(){
    this.initSnap(this.svg.current);
    this.props.setGrid("gi-dt-002");
  }

  initSnap(element){
    this.snap = Snap(element);
    this.snap.attr({ viewBox: "0 0 1100 1400" });
  }

  loadGrid(svgFile){
    if(this.grid) this.grid.remove();

    this.grid = this.snap.group();
    Snap.load(svgFile, data => {
      this.grid.append(data);
      this.grid.attr({
        stroke: "#383838",
        fill: "none",
        "stroke-width": "0.1",
        "stroke-linecap": "square",
        "stroke-miterlimit": "3.239",
      });
      this.grid.transform(`s${baseScale * this.props.zoom} 0 0`);
    });
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