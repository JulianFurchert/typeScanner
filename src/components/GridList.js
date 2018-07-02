import React, {Component} from 'react';
import LazyLoad from 'react-lazy-load';
import Modal from './Modal';
import gridList from '../data/gridList.json';
import gridsPng from '../data/grids-png';
import './Gridlist.css'


class GridsList extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.body = React.createRef();
    this.modal = React.createRef();
  }

  handleClick(grid){
    this.props.setGrid(grid);
    this.props.close();
  }

  listItems(grids){
    return grids.map( grid => {
      return (
        <div key={grid} className="GridList-item" id={grid} >
          <LazyLoad height={200} offsetVertical={100}>
            <img onClick={ () => this.handleClick(grid)} alt={grid} src={gridsPng[grid]} />
          </LazyLoad>
        </div>
      )
    })
  }

  listCategories(){
    return gridList.map( (categorie, index) => {
      return (
        <div key={categorie.name + " " + index} className="GridList-categorie" >
          <div className="GridList-categorie-title">
            {categorie.name}
          </div>
          {this.listItems(categorie.grids)}
        </div>
      )
    })
  }

  render(){
    return(
      <Modal
        ref={this.model}
        title="Grids"
        header="fixed"
        open={this.props.open}
        close={this.props.close}
        scrollTo={this.props.scrollTo}
      >
        <div ref={this.body} className="GridList-body">
          {this.listCategories()}
        </div>
      </Modal>
    )
  }
}

export default GridsList;