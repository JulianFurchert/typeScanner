import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';
import './SelectedLetter.css'

class SelectedLetter extends Component{

  constructor(props) {
    super(props);
    this.letter = React.createRef();
  }

  shouldComponentUpdate(){
    return false;
  }

  componentWillReceiveProps(newProps){
    if(newProps.letter !== this.props.letter){
      this.polygon.forEach( path => {
        path.remove();
      })
      this.initSnap(newProps.letterJson);
    }
  }

  componentDidMount(){
    this.initSnap(this.props.letterJson);
  }

  initSnap(letterJson){
    let s = Snap(this.letter.current);
    this.polygon = [];

    letterJson.forEach( path => {
      let letterPoints = this.arrayToString(path)
      this.polygon.push(s.polyline(letterPoints));
    });

    s.attr({
      viewBox: "0 0 1100 1000",
      fill: "black",
      fillOpacity: "0",
      stroke: "black",
      strokeWidth: 60,
      strokeLinejoin: "round"
    });
  }

  arrayToString(arr){
    let string = "";
    arr.forEach( val => {
      let x = this.toFixed(val.x, 2);
      let y = this.toFixed(val.y, 2);
      string = string.concat(x + ", " + y + ", ");
    })
    string = string.slice(0, -2);
    return string;
  }

  toFixed(value, precision) {
    var power = Math.pow(10, precision || 0);
    return String(Math.round(value * power) / power);
  }

  render(){
    return(
      <svg onClick={this.handleClick} ref={this.letter} className="SelectedLetter" >

      </svg>
    )
  }
}

export default SelectedLetter;