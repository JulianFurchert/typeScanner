import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';

const RenderLetter = ( WrappedComponent ) => {
  return class RenderLetter extends Component {

    constructor(props) {
      super(props);
      this.initLetter = this.initLetter.bind(this);
    }

    shouldComponentUpdate(){
      return false;
    }

    componentWillReceiveProps(newProps){
      if(newProps.letter !== this.props.letter){
        this.animateLetter(newProps.letter);
      }
    }

    animateLetter(letter){
      let animateTime = this.props.animateTime ? this.props.animateTime : 0;
      letter.forEach( (path, index) => {
        let letterPoints = this.arrayToString(path);
        this.polygon[index].animate({ points: letterPoints}, animateTime );
      });
    }

    initLetter(element){
      this.snap = Snap(element);
      this.polygon = [];

      this.props.letter.forEach( path => {
        let letterPoints = this.arrayToString(path)
        this.polygon.push(this.snap.polyline(letterPoints));
      });

      this.snap.attr({
        viewBox: this.props.viewbox,
        fill: "black",
        fillOpacity: "0",
        stroke: "black",
        strokeWidth: 40,
        strokeLinejoin: "round"
      })
    }

    arrayToString(arr){
      let string = "";
      arr.forEach( val => string = string.concat(val.x + ", " + val.y + ", ") )
      string = string.slice(0, -2);
      return string;
    }

    render(){
      return <WrappedComponent {...this.props} initLetter={this.initLetter} />
    }
  }
}

export default RenderLetter;