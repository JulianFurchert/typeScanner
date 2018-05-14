import React from 'react';
import Slider from 'rc-slider';
import sliderIcon from '../../data/icons/icon_slider.svg';

import 'rc-slider/assets/index.css';
import './control.css'
import './Slider.css'

const SliderComponent = (props) => {
  return(
    <div className="Slider-container control">
      <p className="Slider-name">{props.name}</p>
      <Slider
        handleStyle={{
          backgroundColor: 'transparent',
          backgroundImage: `url(${sliderIcon})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center center',
          height: 20,
          width: 20,
          marginLeft: -10,
          marginTop: -8,
          border: '0'
        }}
        railStyle={{ backgroundColor: 'transparent' }}
        trackStyle={{ backgroundColor: 'transparent' }}
        className="Slider"
        onAfterChange={props.onAfterChange}
        onBeforeChange={props.onBeforeChange}
        onChange={value => props.onChange(props.name, value)}
        min={props.min} max={props.max}
        defaultValue={props.defaultValue}
      />
    </div>
  )
}

export default SliderComponent;