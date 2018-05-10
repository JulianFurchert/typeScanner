import React, { Component } from 'react';
// import Snap from 'snapsvg-cjs';
import './Grid.css';

class Grid extends Component {

  componentDidMount(){
    console.log(this.props.gridsSvg);
  }

  render(){
    return(
      <div className="Grid-container">
        <img src={this.props.gridsSvg["gi-dt-003"]} />
      </div>
    )
  }
}

export default Grid;