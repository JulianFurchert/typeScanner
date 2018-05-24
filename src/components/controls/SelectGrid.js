import React, {Component} from 'react';
import { Consumer } from "../../context";
import LazyLoad from 'react-lazy-load';
import grids from '../../data/gridList.json';
import gridsPng from '../../data/grids-png';
import './SelectGrid.css'
import './control.css'

class GridListItems extends Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.setGrid(this.props.grid);
    this.props.close(e);
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

  componentDidMount(){

  }

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
              <div className="GridList-header-closeButton"  onClick={(e) => this.props.close(e)} />
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

class SelectGrid extends Component {

  constructor(props){
    super(props);
    this.state = { open: false }
    this.open = this.open.bind(this);
  }

  close(e){
    console.log(e);
    e.stopPropagation();
    this.setState({ open: false });
  }

  open(){
    this.setState({ open: true });
  }

  render(){
    return (
      <div onClick={this.open} className="SelectGrid-container control">
        { this.state.open ? (<GridsList close={this.close.bind(this)} />) :  "" }
        <p className="SelectGrid-name">{this.props.name}</p>
      </div>
    )
  }
}

export default SelectGrid;