import React, {Component} from 'react';
import LazyLoad from 'react-lazy-load';
import Modal from './Modal';
import classNames from 'classnames';
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

  componentDidMount(){
    console.log(gridList);
  }

  handleClick(grid){
    this.props.setGrid(grid);
    this.props.close();
  }

  listItems(grids){
    return grids.map( grid => {
      let style = classNames('GridList-item',{
        'GridList-item-selected': grid === this.props.selectedGrid
      });
      return (
        <div key={grid} className={style} id={grid} >
          <div className="GridList-item-title">{grid}</div>
          <LazyLoad height={200} offsetVertical={600}>
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
            <div>{categorie.name}</div>
            <div>{` (${categorie.grids.length})`}</div>
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
        open={this.props.open}
        close={this.props.close}
        scrollTo={this.props.selectedGrid}
      >
        <div ref={this.body} className="GridList-body">
          {this.listCategories()}
        </div>
      </Modal>
    )
  }
}

export default GridsList;