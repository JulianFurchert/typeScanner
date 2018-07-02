import React, { Component } from 'react';
import RenderLetter from './RenderLetter';
import './Letter.css';

class Letter extends Component {

  constructor(props){
    super(props);
    this.svg = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.initLetter(this.svg.current);
  }

  handleClick(){
    this.props.setPreviewLetter(this.props.letterName);
  }

  componentWillReceiveProps(next){
    console.log("new");
    console.log(next);
  }

  render(){
    return (
      <div className="Letter-container" >
        <div className="Letter-inner">
          <svg onClick={this.handleClick}  ref={this.svg}  className="Letter"/>
        </div>
      </div>
    )
  }
}

export default RenderLetter(Letter);