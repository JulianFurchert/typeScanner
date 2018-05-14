import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';
import './Grid.css';

const baseScale = 2.5;

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
      let zoom = baseScale + newProps.zoom;
      let zommCenterX = ( 1100 * newProps.zoom - 1100 ) / 2;
      let zommCenterY = ( 1400 * newProps.zoom - 1400 ) / 2;
      let xPos = zommCenterX;
      let yPos = zommCenterY;
      this.grid.transform(`t-${xPos} -${yPos} s${zoom} 0 0`);
    }
  }

  componentDidMount(){
    this.initGrid(this.svg.current);
  }

  initGrid(element){
    this.snap = Snap(element);
    this.grid = this.snap.group();
    this.snap.attr({
      viewBox: "0 0 1100 1400"
    })

    Snap.load(this.props.gridSvg, (data) =>{
      data.select("svg").attr({
        stroke: "#d6d6d6",
        viewBox: "",
        baseProfile: "",
        version: "",
        id:"",
        xmlns: "",
        "xmlns:xlink": "",
        "xml:space" : ""
      });
      this.grid.append( data.select("svg") );
      this.grid.transform(`s${baseScale} 0 0`);
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