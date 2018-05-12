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

  componentWillReceiveProps(newProps){
    if(newProps.zoom !== this.props.zoom){
      let zoom = newProps.zoom;
      this.grid.transform(`s${zoom} ,${zoom} ,0 ,0`);
    }
    if(newProps.zoom !== this.props.zoom){
    }
    if(newProps.zoom !== this.props.zoom){
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
        viewBox: "",
        baseProfile: "",
        version: "",
        id:"",
        xmlns: "",
        "xmlns:xlink": "",
        "xml:space" : ""
      });
      this.grid.append( data.select("svg") );
    });

    this.grid.transform("s2 ,2");
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