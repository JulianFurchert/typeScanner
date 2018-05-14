import React from 'react';
import Slider from 'rc-slider';
import ControlContainer from './ControlContainer';
import sliderIcon from '../../data/icons/icon_slider.svg';

import 'rc-slider/assets/index.css';
import './Slider.css'

const SliderComponent = (props) => {
  return(
    <ControlContainer>
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
          marginLeft: 0,
          marginTop: -8,
          border: '0'
        }}
        activeDotStyle= {{ border: '2px solid red' }}
        railStyle={{ backgroundColor: 'transparent' }}
        trackStyle={{ backgroundColor: 'transparent' }}
        className="Slider"
        onAfterChange={props.onAfterChange}
        onBeforeChange={props.onBeforeChange}
        onChange={value => props.onChange(props.name, value)}
        min={props.min} max={props.max}
        defaultValue={props.defaultValue}
      />
    </ControlContainer>
  )
}

export default SliderComponent;