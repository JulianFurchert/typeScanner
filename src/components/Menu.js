import React, { Component } from 'react';
import createFont from '../helper/createFont';
import Slider from './controls/Slider';
import Button from './controls/Button';
import SelectGrid from './controls/SelectGrid';
import './Menu.css';

class Menu extends Component {

  constructor(props){
    super(props);
    this.updateGridSetting = this.updateGridSetting.bind(this);
    this.updateWeight = this.updateWeight.bind(this);
    this.startCreatingFont = this.startCreatingFont.bind(this);
  }

  updateGridSetting(key, value){
    let obj = {};
    obj[key] = value;
    this.props.setGridSetting(obj);
  }

  updateWeight(key, value){
    this.props.setFontWeight(value);
  }

  startCreatingFont(){
    createFont(this.props.letter, this.props.alphabet);
  }

  render(){
    return (
      <div className="Menu">
        <div className="Menu-settings">
          <Slider
            name={"zoom"}
            min={1} max={20}
            defaultValue={this.props.gridSetting.zoom}
            onBeforeChange={this.props.resetAlphabet}
            onChange={this.updateGridSetting}
            onAfterChange={this.props.renderAlphabet}
          />
          <Slider
            name={"xPos"}
            min={-20} max={+20}
            defaultValue={this.props.gridSetting.xPos}
            onBeforeChange={this.props.resetAlphabet}
            onChange={this.updateGridSetting}
            onAfterChange={this.props.renderAlphabet}
          />
          <Slider
            name={"yPos"}
            min={-20} max={+20}
            defaultValue={this.props.gridSetting.yPos}
            onBeforeChange={this.props.resetAlphabet}
            onChange={this.updateGridSetting}
            onAfterChange={this.props.renderAlphabet}
          />
          <Slider
            name={"Weight"}
            min={20} max={80}
            defaultValue={this.props.fontWeight}
            onChange={this.updateWeight}
          />
          <SelectGrid name={"Grid"} />
        </div>
        <Button onClick={this.startCreatingFont} name={"Export"} />
      </div>
    )
  }
}

export default Menu;
