import React, {Component} from 'react';
import LazyLoad from 'react-lazyload';
import grids from '../../data/gridList.json';
import gridsPng from '../../data/grids-png';
import './SelectGrid.css'
import './control.css'


class GridsList extends Component{

  GridListItems = grids.map( grid => {
    return (
      <img key={grid} alt={grid} src={gridsPng[grid]} />
    )
  });

  render(){
    return(
      <div onClick={this.props.close} className="GridList">
        <div className="GridList-header">
          <div className="GridList-closeButton" />
        </div>
        <div className="GridList-body">
          {this.GridListItems}
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