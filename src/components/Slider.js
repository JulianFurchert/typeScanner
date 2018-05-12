import React, { Component } from 'react';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './Slider.css'

export default class SliderCo extends Component {

  constructor(props){
    super(props);
    this.handleAfterChange = this.handleAfterChange.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleBeforeChange = this.handleBeforeChange.bind(this);
  }

  handleAfterChange(){
    this.props.renderPreviewLetter();
  }

  handleBeforeChange(value){
    this.props.resetPreviewLetter();
  }

  handleOnChange(value){
    console.log(value);
    let obj = {};
    obj[this.props.name] = value;
    this.props.setGridSetting(obj);
  }

  render(){
    return(
      <div className="Slider-container">
        <p className="Slider-name">{this.props.name}</p>
        <Slider
          className="Slider"
          onAfterChange={this.handleAfterChange}
          onBeforeChange={this.handleBeforeChange}
          onChange={this.handleOnChange}
          min={0} max={20}
          defaultValue={3}
        />
      </div>
    )
  }
}