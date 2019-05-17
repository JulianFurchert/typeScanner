import React, { Component } from 'react';
import Slider from './controls/Slider';
import Button from './controls/Button';
import GridList from './GridList';
import createFont from '../helper/createFont';
import openIcon from '../icons/icon_select.svg'
import './Menu.css';


class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
      gridListOpen: false,
      loadingFont: false,
      values: 1,
    }
    this.updateGridSetting = this.updateGridSetting.bind(this);
    this.updateWeight = this.updateWeight.bind(this);
    this.startCreatingFont = this.startCreatingFont.bind(this);
    this.openGridList = this.openGridList.bind(this);
    this.closeGridList = this.closeGridList.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
  }

  updateGridSetting(key, value){
    let obj = {};
    obj[key] = value;
    this.props.setGridSetting(obj);
  }

  updateWeight(key, value){
    this.props.setFontWeight(value);
  }

  openGridList(){
    this.setState({ gridListOpen : true })
  }

  closeGridList(){
    this.setState({ gridListOpen : false })
  }

  toggleLoading(){
    this.setState(prevState => ({
      loadingFont: !prevState.loadingFont
    }));
  }

  startCreatingFont(){
    this.setState({loadingFont: true}, () =>{});
    createFont(
      this.props.alphabet,
      this.props.fontWeight,
      this.props.grid,
      this.props.gridSetting
    );
    this.setState({loadingFont: false});
  }


  render(){
    return (
      <div className="Menu">
        <GridList
          close={this.closeGridList}
          open={this.state.gridListOpen}
          setGrid={this.props.setGrid}
          selectedGrid={this.props.grid}
        />
        <div className="Menu-settings">
          <Slider
            name="zoom"
            min={1} max={20}
            defaultValue={this.props.gridSetting.zoom}
            onBeforeChange={this.props.resetAlphabet}
            onChange={this.updateGridSetting}
            onAfterChange={this.props.renderAlphabet}
          />
          <Slider
            name="xPos"
            min={-20} max={+20}
            defaultValue={this.props.gridSetting.xPos}
            onBeforeChange={this.props.resetAlphabet}
            onChange={this.updateGridSetting}
            onAfterChange={this.props.renderAlphabet}
          />
          <Slider
            name="yPos"
            min={-20} max={+20}
            defaultValue={this.props.gridSetting.yPos}
            onBeforeChange={this.props.resetAlphabet}
            onChange={this.updateGridSetting}
            onAfterChange={this.props.renderAlphabet}
          />
          <Slider
            name="Weight"
            min={20} max={120}
            defaultValue={this.props.fontWeight}
            onChange={this.updateWeight}
          />
          <Button
            large
            name="Grid"
            icon={openIcon}
            onClick={this.openGridList}
          />
        </div>
        <Button
          name="create Font"
          loading={this.state.loadingFont}
          onClick={this.startCreatingFont}
        />
      </div>
    )
  }
}

export default Menu;
