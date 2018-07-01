import React, {Component} from 'react';
import { Consumer } from "../context";
import LazyLoad from 'react-lazy-load';
import Button from './controls/Button';
import grids from '../data/gridList(old).json';
import gridsPng from '../data/grids-png';
import closeIcon from '../data/icons/icon_close.svg';
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
        <div className="GridList-container">
          <div className="GridList">
            <div className="GridList-header">
              <h4 className="GridList-header-title">Select a Grid</h4>
              <Button
                circle
                icon={closeIcon}
                onClick={this.props.close}
              />
            </div>
            <div className="GridList-body">
              {this.listItems(setGrid)}
            </div>
          </div>
        </div>
      )}
      </Consumer>
    )
  }
}

export default GridsList;