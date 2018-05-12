import React, {Component} from "react";
import _ from 'lodash';
import letterScanner from "./helper/letterScanner"

import initialAlphabet from "./data/alphabet.json"
import gridsJson from "./data/grids-json";
import gridsSvg from "./data/grids-svg";

const Context = React.createContext();

export class Provider extends Component {
  files = [ 'gi-dt-001', 'gi-dt-002', 'gi-dt-003', 'gi-dt-004' ];
  index = 0;

  state = {
    alphabet: initialAlphabet,
    previewLetter: initialAlphabet["A"],
    grid: "gi-dt-009",
    gridsJson: gridsJson,
    gridsSvg: gridsSvg,
    gridSetting: {
      zoom: 1,
      xPos: 0,
      yPos: 0
    }
  };

  resetAlphabet = () => {
    this.setState({ previewLetter: initialAlphabet["A"] })
    this.setState({ alphabet: initialAlphabet})
  }

  renderAlphabet = () => {
    let j = this.state.gridsJson[this.files[this.index]].then( (json) => {
      console.log(this.files[this.index]);
      console.log(json);
      this.index++;
  });
    // let alphabet = _.mapValues( initialAlphabet, letter => {
    //   return letterScanner(
    //     letter,
    //     this.state.gridsJson[this.state.grid],
    //     this.state.gridSetting
    //   );
    // });
    // this.setState({ previewLetter: alphabet["A"] })
    // this.setState({ alphabet })
    // this.setState({ alphabet })
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
          resetAlphabet: this.resetAlphabet,
          renderAlphabet: this.renderAlphabet,
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
