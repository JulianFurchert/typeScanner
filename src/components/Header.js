import React from 'react';
import './Header.css';

function pad(num, size) {
  var s = "000000000" + num;
  return s.substr(s.length-size);
}

const Header = props => {
  return(
    <div className="Header">
      <div className="Header-information">
        <div>{props.grid}</div>
        <div>{`zoom: ${props.gridSetting.zoom}`}</div>
        <div>{`xPos: ${props.gridSetting.xPos}`}</div>
        <div>{`yPos: ${props.gridSetting.yPos}`}</div>
        <div>{`weight: ${props.weight}`}</div>
      </div>
      <div className="Header-about">About</div>
    </div>
  )
}

export default Header;