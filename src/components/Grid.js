import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';
import './Grid.css';
import gridsSvg from "../data/grids-svg";
import * as firebase from 'firebase'
import 'firebase/firestore';
const baseScale = 3;


var firebaseConfig = {
  apiKey: "AIzaSyAntoUmv-Fpq1JJibKiQACvkbJTPcFULKU",
  authDomain: "typescanner.firebaseapp.com",
  databaseURL: "https://typescanner.firebaseio.com",
  projectId: "typescanner",
  storageBucket: "typescanner.appspot.com",
  messagingSenderId: "17501300457",
  appId: "1:17501300457:web:1682613478fcb794"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()
const storageRef = storage.ref()

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
      this.loadGrid(newProps.grid);
    }
  }

  componentDidMount(){
    this.initSnap(this.svg.current);
    this.props.setGrid("gi-og-005");
  }

  initSnap(element){
    this.snap = Snap(element);
    this.snap.attr({ viewBox: "0 0 1100 1400" });
  }

  loadGrid(grid){
    if(this.grid) this.grid.remove();
    this.grid = this.snap.group();

    storageRef.child(`grids-svg/${grid}.svg`).getDownloadURL().then(function(url) {
      Snap.load(url, data => {
        console.log(this.grid)
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
    }.bind(this)).catch(function(error) {
      console.log(error)
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