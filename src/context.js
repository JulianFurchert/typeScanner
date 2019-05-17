import React, {Component} from "react";
import _ from 'lodash';
import axios from'axios';
import letterScanner from "./helper/letterScanner"
import initialAlphabet from "./data/alphabet.json"


const Context = React.createContext();

const ax = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://typescanner.com/' : 'http://localhost:3000/'
})

export class Provider extends Component {
  state = {
    loading: true,
    alphabet: initialAlphabet,
    previewLetter: "A",
    fontWeight: 40,
    grid: null,
    gridJson: [],
    gridSetting: {
      zoom: 6,
      xPos: 0,
      yPos: 0
    }
  };

  resetAlphabet = () => {
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
    this.setState({ alphabet })
    this.setState({ loading: false });
  }

  setPreviewLetter = previewLetter => {
    this.setState({ previewLetter })
  }

  setGrid = grid => {
    this.setState({ grid });
    this.setState({ loading: true });
    ax.get(`grids-json/${grid}.json`)
      .then(function (response) {
        let gridJson = response.data;
        this.setState({ gridJson }, () => {
          this.renderAlphabet();
        });
      }.bind(this))
      .catch(function (error) {});
  }

  setGridSetting = setting => {
    this.setState({
      gridSetting: Object.assign(this.state.gridSetting, setting)
    })
  }

  setFontWeight = fontWeight => {
    this.setState({ fontWeight})
  }

  render(){
    return(
      <Context.Provider
        value={{
          ...this.state,
          resetAlphabet: this.resetAlphabet,
          renderAlphabet: this.renderAlphabet,
          setPreviewLetter: this.setPreviewLetter,
          setFontWeight: this.setFontWeight,
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
