import React, {Component} from 'react';
import { Consumer } from "../context";
import LazyLoad from 'react-lazy-load';
import Modal from './Modal';
import grids from '../data/gridList(old).json';
import gridsPng from '../data/grids-png';
import './Gridlist.css'


class GridListItems extends Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.setGrid(this.props.grid);
    this.props.close();
  }

  render(){
    let grid = this.props.grid;
    return (
      <LazyLoad id={grid} className="GridList-item" offsetVertical={100}>
        <img onClick={this.handleClick} alt={grid} src={gridsPng[grid]} />
      </LazyLoad>
    )
  }
}

class GridsList extends Component{

  listItems(setGrid){
    return grids.map( grid => {
      return (
        <GridListItems key={grid}
        close={this.props.close}
        setGrid={setGrid} grid={grid}
        />
      )
    })
  }

  render(){
    return(
      <Consumer>
      { ({ setGrid }) => (
        <Modal title="Grids" close={this.props.close}>
          <div className="GridList-body">
            {this.listItems(setGrid)}
          </div>
        </Modal>
      )}
      </Consumer>
    )
  }
}

export default GridsList;