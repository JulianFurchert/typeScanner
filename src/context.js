import React, {Component} from "react";
import _ from 'lodash';
import axios from'axios';
import letterScanner from "./helper/letterScanner"
import initialAlphabet from "./data/alphabet.json"
import gridsSvg from "./data/grids-svg";
//import gridsPng from "./data/grids-png";

const Context = React.createContext();

const ax = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://fontscanner.netlify.com' : 'http://localhost:3000'
})

export class Provider extends Component {
  state = {
    alphabet: initialAlphabet,
    previewLetter: initialAlphabet["A"],
    loading: true,
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

  renderAlphabet = () => {
    let alphabet = _.mapValues( initialAlphabet, letter => {
      return letterScanner(
        letter,
        this.state.gridJson,
        this.state.gridSetting
      );
    });
    this.setState({ previewLetter: alphabet["A"] })
    this.setState({ alphabet })
  }

  setGrid = (grid) => {
    ax.get(`grids-json/${grid}.json`)
      .then(function (response) {
        this.setState({grid});
        this.setState({gridJson: response.data}, ()=>{
          this.renderAlphabet();
        });
      }.bind(this))
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
