import React, {Component} from "react";
import alphabet from "./data/alphabet.json"

function importAll(r) {
  let files = {};
  r.keys().map((item, index) => { files[item.replace('./', '')] = r(item); });
  return files;
}

const gridsSvg = importAll(require.context('./data/svg-daten/', true, /\.svg$/));
const gridsJson = importAll(require.context('./data/svg-daten/', true, /\.svg$/));

const Context = React.createContext();
export class Provider extends Component {
  state = {
    initialAlphabet: alphabet,
    alphabet: alphabet,
    selectedLetter: "A",
    grid: "A",
    gridsSvg: gridsSvg,
    gridsJson: gridsJson,
    gridSetting: {
      zoom: 1,
      xPosition: 0,
      yPosition: 0
    }
  };

  selectLetter = (selectedLetter) => {
    this.setState({ selectedLetter })
  }

  selectGrid = (selectedGrid) => {
    this.setState({ selectedGrid })
  }

  newAlphabet = (alphabet) => {
    this.setState({ alphabet })
  }

  render(){
    return(
      <Context.Provider
        value={{
          ...this.state,
          selectLetter: this.selectLetter,
          selectGrid: this.selectGrid,
          newAlphabet: this.newAlphabet,
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
