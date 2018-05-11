import React, { Component } from 'react';
import ReactSlider from 'react-slider';

import './Slider.css'

export default class Slider {
  render(){
    return(
      <ReactSlider defaultValue={[0, 100]} withBars />
    );
  }
}