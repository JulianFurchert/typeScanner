import React, {Component} from 'react';
import LazyLoad from 'react-lazy-load';
import grids from '../../data/gridList.json';
import gridsPng from '../../data/grids-png';
import './SelectGrid.css'
import './control.css'


class GridsList extends Component{

  GridListItems = grids.map( grid => {
    return (
      <LazyLoad className="GridList-item" key={grid} offsetVertical={100}>
        <img alt={grid} src={gridsPng[grid]} />
      </LazyLoad>
    )
  });

  render(){
    return(
      <div className="GridList-container">
        <div onClick={this.props.close} className="GridList">
          <div className="GridList-header">
            <h4 className="GridList-header-title">Select a Grid</h4>
            <div className="GridList-header-closeButton" />
          </div>
          <div className="GridList-body">
            {this.GridListItems}
          </div>
        </div>
      </div>
    )
  }

}

class SelectGrid extends Component {

  constructor(props){
    super(props);
    this.open = this.open.bind(this);
    this.state = { open: false }
  }

  close(){
    this.setState({ open: false });
  }

  open(){
    this.setState({ open: true });
  }

  render(){
    return (
      <div className="SelectGrid-container control">
        { this.state.open ? (<GridsList close={this.close.bind(this)} />) :  "" }
        <p onClick={this.open} className="SelectGrid-name">{this.props.name}</p>
      </div>
    )
  }
}

export default SelectGrid;