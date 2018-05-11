import React, { Component } from 'react';
import { Consumer } from "../context";
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './Slider.css'

export default class SliderCo extends Component {

  render(){
    return(
      <Consumer>
        {({ renderPreviewLetter, resetPreviewLetter, renderAlphabet, resetAlphabet }) => (
          <div className="Slider-container">
            <p className="Slider-name">{this.props.name}</p>
            <Slider
              className="Slider"
              onAfterChange={renderPreviewLetter}
              onBeforeChange={resetPreviewLetter}
              min={0} max={20}
              defaultValue={3}
            />
          </div>
        )}
      </Consumer>
    )
  }
}