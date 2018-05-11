import React, { Component } from 'react';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './Slider.css'

export default class SliderCo extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleAfterChange = this.handleAfterChange.bind(this);
  }

  handleChange(value){
    this.props.onChange(value);
  }

  handleAfterChange(value){
    this.props.onChange(value);
  }

  render(){
    return(
      <div className="Slider-container">
        <p className="Slider-name">{this.props.name}</p>
        <Slider
          className="Slider"
          onAfterChange={this.handleAfterChange}
          onChange={this.handleChange}
          min={0} max={20}
          defaultValue={3}
        />
      </div>
    );
  }
}