import React from 'react';
import Slider from './Slider';
import './Menu.css';

const Menu = props => {
  return (
      <div className="Menu">
        <Slider name={"zoom"} min={1} max={5} defaultValue={1} />
        <Slider name={"x-Pos"} min={0} max={50} defaultValue={0} />
        <Slider name={"y-Pos"} min={0} max={50} defaultValue={0} />
      </div>

  )
}

export default Menu;
