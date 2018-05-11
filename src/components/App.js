import React, { Component } from 'react';
import Alphabet from './Alphabet';
import SelectedLetter from './SelectedLetter';
import Slider from './Slider';
import './App.css';

import { Consumer } from "../context";

class App extends Component {
  render() {
    return (
      <Consumer>
        {({ selectedLetter, alphabet, grid, gridsJson, gridsSvg, gridSetting }) => (
          <div className="App">
            <div className= "App-main">
              <SelectedLetter
                viewbox={"0 0 1100 1400"}
                letter={selectedLetter}
                letterJson={alphabet[selectedLetter]}
                grid={grid}
                gridJson={gridsJson[grid]}
                gridSvg={gridsSvg[grid]}
                gridSetting={gridSetting}
              />
              <Alphabet
                alphabet={alphabet}
              />
              <div className="App-menu">
                <Slider onChange={(value)=>{console.log(value)}} name={"zoom"} min={1} max={5} defaultValue={1} />
                <Slider onChange={(value)=>{console.log(value)}} name={"x-Pos"} min={0} max={50} defaultValue={0} />
                <Slider onChange={(value)=>{console.log(value)}} name={"y-Pos"} min={0} max={50} defaultValue={0} />
              </div>
            </div>
          </div>
        )}
      </Consumer>
    )
  }
}

export default App;
