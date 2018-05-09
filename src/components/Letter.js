import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';
import './Letter.css'

class Letter extends Component {
  constructor(props) {
    super(props);
    this.letter = React.createRef();
  }

  shouldComponentUpdate(){
    return false;
  }

  componentDidMount(){
    this.initSnap();
  }

  initSnap(){
    let s = Snap(this.letter.current);
    let polygon = [];

    this.props.letterJson.forEach( path => {
      let letterPoints = this.arrayToString(path)
      polygon.push(s.polyline(letterPoints));
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
      <svg
        onClick={ () => {this.props.selectLetter(this.props.letter)} }
        ref={ this.letter }  className="Letter"
      />
    )
  }
}

export default Letter;