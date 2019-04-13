import React from 'react';
import './Header.css';

const Header = props => {
  return(
    <div className="Header">
      <div className="Header-information">
        <div>{props.grid}</div>
        <div>{`zoom: ${Math.round(props.gridSetting.zoom)}`}</div>
        <div>{`xPos: ${Math.round(props.gridSetting.xPos)}`}</div>
        <div>{`yPos: ${Math.round(props.gridSetting.yPos)}`}</div>
        <div>{`weight: ${Math.round(props.weight)}`}</div>
      </div>
      <div className="Header-about">Information</div>
    </div>
  )
}

export default Header;