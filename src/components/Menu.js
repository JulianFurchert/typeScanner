import React, { Component } from 'react';
import Slider from './controls/Slider';
import Button from './controls/Button';
import SelectGrid from './controls/SelectGrid';
import './Menu.css';

class Menu extends Component {

  constructor(props){
    super(props);
    this.updateGridSetting = this.updateGridSetting.bind(this);
    this.updateWeight = this.updateWeight.bind(this);
  }

  updateGridSetting(key, value){
    let obj = {};
    obj[key] = value;
    this.props.setGridSetting(obj);
  }

  updateWeight(key, value){
    this.props.setFontWeight(value);
  }

  render(){
    return (
      <div className="Menu">
        <div className="Menu-settings">
          <Slider
            name={"zoom"}
            min={1} max={20}
            defaultValue={1}
            onBeforeChange={this.props.resetAlphabet}
            onChange={this.updateGridSetting}
            onAfterChange={this.props.renderAlphabet}
          />
          <Slider
            name={"xPos"}
            min={-20} max={+20}
            defaultValue={0}
            onBeforeChange={this.props.resetAlphabet}
            onChange={this.updateGridSetting}
            onAfterChange={this.props.renderAlphabet}
          />
          <Slider
            name={"yPos"}
            min={-20} max={+20}
            defaultValue={0}
            onBeforeChange={this.props.resetAlphabet}
            onChange={this.updateGridSetting}
            onAfterChange={this.props.renderAlphabet}
          />
          <Slider
            name={"Weight"}
            min={20} max={80}
            defaultValue={40}
            onChange={this.updateWeight}
          />
          <SelectGrid name={"Grid"} />
        </div>
        <Button name={"Export"} />
      </div>
    )
  }
}

export default Menu;
