import React, { Component } from 'react';
import Slider from './controls/Slider';
import Button from './controls/Button';
import SelectGrid from './controls/SelectGrid';
import './Menu.css';

class Menu extends Component {

  constructor(props){
    super(props);
    this.updateGridSetting = this.updateGridSetting.bind(this);
  }

  updateGridSetting(key, value){
    let obj = {};
    obj[key] = value;
    this.props.setGridSetting(obj);
  }

  render(){
    return (
      <div className="Menu">
        <div className="Menu-settings">
          <Slider
            name={"zoom"}
            min={2} max={30}
            defaultValue={2}
            onBeforeChange={this.props.resetAlphabet}
            onChange={this.updateGridSetting}
            onAfterChange={this.props.renderAlphabet}
          />
          <Slider
            name={"yPos"}
            min={2} max={30}
            defaultValue={2}
            onBeforeChange={this.props.resetAlphabet}
            onChange={this.updateGridSetting}
            onAfterChange={this.props.renderAlphabet}
          />
          <Slider
            name={"xPos"}
            min={2} max={30}
            defaultValue={2}
            onBeforeChange={this.props.resetAlphabet}
            onChange={this.updateGridSetting}
            onAfterChange={this.props.renderAlphabet}
          />
          <Slider
            name={"Width"}
            min={2} max={30}
            defaultValue={2}
            onBeforeChange={this.props.resetAlphabet}
            onChange={this.updateGridSetting}
            onAfterChange={this.props.renderAlphabet}
          />
          <SelectGrid name={"Grid"} />
        </div>
        <Button name={"Export"} />
      </div>
    )
  }
}

export default Menu;
