import React, {Component} from "react";
import _ from 'lodash';
import letterScanner from "./helper/letterScanner"

import alphabet from "./data/alphabet.json"
import gridsJson from "./data/grids-json";
import gridsSvg from "./data/grids-svg";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    initialAlphabet: alphabet,
    alphabet: alphabet,
    previewLetter: alphabet["A"],
    grid: "gi-dt-009",
    gridsJson: gridsJson,
    gridsSvg: gridsSvg,
    gridSetting: {
      zoom: 1,
      xPos: 0,
      yPos: 0
    }
  };

  renderPreviewLetter = () => {
    let NewPreviewLetter = letterScanner(
      alphabet["A"],
      this.state.gridsJson[this.state.grid],
      this.state.gridSetting
    );
    this.setState({ previewLetter: NewPreviewLetter })
  }

  resetPreviewLetter = () => {
    this.setState({ previewLetter: alphabet["A"] })
  }

  renderAlphabet = () => {
    let alphabet = _.mapValues( this.state.initialAlphabet, letter => {
      return letterScanner(
        letter,
        this.state.gridsJson[this.state.grid],
        this.state.gridSetting
      );
    });
    this.setState({ alphabet })
  }

  resetAlphabet = () => {
    this.setState({ alphabet: this.state.initialAlphabet})
  }

  setGrid = (selectedGrid) => {
    this.setState({ selectedGrid })
  }

  setGridSetting = ( setting ) => {
    this.setState({
      gridSetting: Object.assign(this.state.gridSetting, setting)
    })
  }

  render(){
    return(
      <Context.Provider
        value={{
          ...this.state,
          renderPreviewLetter: this.renderPreviewLetter,
          resetPreviewLetter: this.resetPreviewLetter,
          renderAlphabet: this.renderAlphabet,
          resetAlphabet: this.resetAlphabet,
          setGrid: this.setGrid,
          setGridSetting: this.setGridSetting,
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
