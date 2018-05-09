import React, { Component } from 'react';
import RenderLetter from '../hoc/RenderLetter';
import './Letter.css';

class Letter extends Component {
  constructor(props) {
    super(props);
    this.letter = React.createRef();
  }

  shouldComponentUpdate(){
    return false;
  }

  componentDidMount(){
    this.props.initLetter(this.letter.current);
  }

  render(){
    return(
      <svg
        onClick={ () => {this.props.selectLetter(this.props.letter)} }
        ref={ this.letter }  className="Letter"
      />
    )
  }
}

export default RenderLetter(Letter);