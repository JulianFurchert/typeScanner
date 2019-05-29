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
        if(newProps.letterName === this.props.letterName){
          this.animateLetter(newProps.letter);
        }else {
          //this.updateLetter(newProps.letter);
        }
      }
      if(newProps.weight !== this.weight){
        this.snap.attr({
          strokeWidth: newProps.weight,
        })
      }
    }

    animateLetter(letter){
      // if(this.props.letterName === "A"){
      //   let data = letter.map(path => {
      //     const newPoints = [];
      //     path.forEach((point,index) => {
      //       if(index % 2 === 0){
      //         newPoints.push([point.x, point.y])
      //       }
      //     });
      //     return newPoints;
      //   })
      // }
      let animateTime = this.props.animateTime ? this.props.animateTime : 0;
      letter.forEach( (path, index) => {
        let letterPoints = this.arrayToString(path);
        this.polygon[index].animate({ points: letterPoints}, animateTime );
      });
    }

    updateLetter(letter){
      this.polygon.forEach( path => path.remove() );
      letter.forEach( path => {
        let letterPoints = this.arrayToString(path)
        this.polygon.push(this.snap.polyline(letterPoints));
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
        fill: "#00B693",
        fillOpacity: "0",
        stroke: "#00B693",
        strokeWidth: this.props.weight,
        strokeLinejoin: "round",
        strokeLinecap: "square"
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