import React, {Component} from "react";
import _ from 'lodash';
import axios from'axios';
import letterScanner from "./helper/letterScanner"

import initialAlphabet from "./data/alphabet.json"
import gridsSvg from "./data/grids-svg-clean";

const Context = React.createContext();

const ax = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://fontscanner.netlify.com' : 'http://localhost:3000'
})

export class Provider extends Component {
  state = {
    alphabet: initialAlphabet,
    previewLetter: initialAlphabet["A"],
    weight: 20,
    grid: "",
    gridJson: [],
    gridsSvg: gridsSvg,
    gridSetting: {
      zoom: 4,
      xPos: 0,
      yPos: 0
    }
  };

  resetAlphabet = () => {
    this.setState({ previewLetter: initialAlphabet["A"] })
    this.setState({ alphabet: initialAlphabet})
  }

  renderAlphabet = (gridJson = this.state.gridJson) => {
    console.log(gridJson);
    let alphabet = _.mapValues( initialAlphabet, letter => {
      return letterScanner(
        letter,
        gridJson,
        this.state.gridSetting
      );
    });
    this.setState({ previewLetter: alphabet["A"] })
    this.setState({ alphabet })
  }

  setGrid = (selectedGrid) => {
    let self = this;
    ax.get(`grids-json/${selectedGrid}.json`)
      .then(function (response) {
        self.renderAlphabet(response.data)
        self.setState({selectedGrid});
        self.setState({gridJson: response.data}, ()=>{
          console.log("setState");
        });
      })
      .catch(function (error) {});
  }

  setGridSetting = ( setting ) => {
    this.setState({
      gridSetting: Object.assign(this.state.gridSetting, setting)
    })
  }

  setWeight = (weight) => {
    this.setState({ weight})
  }

  render(){
    return(
      <Context.Provider
        value={{
          ...this.state,
          resetAlphabet: this.resetAlphabet,
          renderAlphabet: this.renderAlphabet,
          setWeight: this.setWeight,
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
