import React from 'react';
import { Consumer } from "../context";
import Slider from './Slider';
import './Menu.css';

const Menu = props => {
  return (
    <Consumer>
      {({ setGridSetting, renderAlphabet, resetAlphabet }) => (
        <div className="Menu">
          <Slider name={"zoom"} min={2} max={5} defaultValue={2} setGridSetting={setGridSetting} renderAlphabet={renderAlphabet} resetAlphabet={resetAlphabet} />
          <Slider name={"xPos"} min={0} max={50} defaultValue={0} setGridSetting={setGridSetting} renderAlphabet={renderAlphabet} resetAlphabet={resetAlphabet} />
          <Slider name={"yPos"} min={0} max={50} defaultValue={0} setGridSetting={setGridSetting} renderAlphabet={renderAlphabet} resetAlphabet={resetAlphabet} />
        </div>
      )}
    </Consumer>
  )
}

export default Menu;
