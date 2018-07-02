import React, {Component} from 'react';
import { Consumer } from "../context";
import LazyLoad from 'react-lazy-load';
import Modal from './Modal';
import grids from '../data/gridList(old).json';
import gridsPng from '../data/grids-png';
import './Gridlist.css'


class GridsList extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(grid){
    this.props.setGrid(grid);
    this.props.close();
  }

  listItems(setGrid){
    return grids.map( grid => {
      return (
        <LazyLoad key={grid} id={grid} className="GridList-item" offsetVertical={100}>
          <img onClick={ () => this.handleClick(grid)} alt={grid} src={gridsPng[grid]} />
        </LazyLoad>
      )
    })
  }

  render(){
    return(
      <Modal open={this.props.open} title="Grids" close={this.props.close}>
        <div className="GridList-body">
          {this.listItems()}
        </div>
      </Modal>
    )
  }
}

export default GridsList;