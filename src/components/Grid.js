import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';
import './Grid.css';
import gridsSvg from "../data/grids-svg";
const baseScale = 3;

class Grid extends Component {

  constructor(props) {
    super(props);
    this.svg = React.createRef();
  }

  shouldComponentUpdate(){
    return false;
  }

  componentWillReceiveProps(newProps){
    if(newProps.zoom !== this.props.zoom || newProps.xPos !== this.props.xPos ||  newProps.yPos !== this.props.yPos ){
      this.tranformGrid(newProps.zoom, newProps.xPos, newProps.yPos);
    }
    if(newProps.grid  !== this.props.grid ) {
      this.loadGrid(gridsSvg[newProps.grid]);
    }
  }

  componentDidMount(){
    this.initSnap(this.svg.current);
    // this.props.setGrid("gi-og-006");
    this.props.setGrid("gi-va-025");
    // this.props.setGrid("gi-og-006");
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
        "vector-effect": "non-scaling-stroke"
      });
      this.tranformGrid(this.props.zoom, this.props.xPos, this.props.yPos);
    });
  }

  tranformGrid(zoom, xPos, yPos){
    let totalZoom = baseScale * zoom;
    let xZoomShift = ( 1100 * zoom - 1100 ) / -2;
    let yZoomShift = ( 1400 * zoom - 1400 ) / -2;
    let xShift = xZoomShift + (xPos * totalZoom);
    let yShift = yZoomShift + (yPos * totalZoom);
    this.grid.transform(`t${xShift} ${yShift} s${totalZoom} 0 0`);
  }

  render(){
    return(
      <svg ref={this.svg} className="Grid"  />
    )
  }
}

export default Grid;