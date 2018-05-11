import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';

const RenderLetter = ( WrappedComponent ) => {
  return class RenderLetter extends Component {

    constructor(props) {
      super(props);
      this.initLetter = this.initLetter.bind(this);
      this.updateLetter = this.updateLetter.bind(this);
    }

    componentWillReceiveProps(newProps){
      if(newProps.letter !== this.props.letter){
        this.polygon.forEach( path => {
          path.remove();
        })
        newProps.letterJson.forEach( path => {
          let letterPoints = this.arrayToString(path)
          this.polygon.push(this.snap.polyline(letterPoints));
        });
      }
    }

    updateLetter(letterJson){
      this.polygon.forEach( path => {
        path.remove();
      })
      letterJson.forEach( path => {
        let letterPoints = this.arrayToString(path)
        this.polygon.push(this.snap.polyline(letterPoints));
      });
    }

    initLetter(element){
      this.snap = Snap(element);
      this.polygon = [];

      this.props.letterJson.forEach( path => {
        let letterPoints = this.arrayToString(path)
        this.polygon.push(this.snap.polyline(letterPoints));
      });

      this.snap.attr({
        viewBox: this.props.viewbox,
        fill: "black",
        fillOpacity: "0",
        stroke: "black",
        strokeWidth: 2,
        strokeLinejoin: "round"
      })
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
      return <WrappedComponent {...this.props} initLetter={this.initLetter} updateLetter={this.updateLetter}/>
    }
  }
}

export default RenderLetter;