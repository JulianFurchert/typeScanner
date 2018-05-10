import React, { Component } from 'react';
import Alphabet from './Alphabet';
import SelectedLetter from './SelectedLetter';
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
                letter={selectedLetter}
                letterJson={alphabet[selectedLetter]}
                grid={grid}
                gridJson={gridsJson[grid]}
                gridSvg={gridsSvg[grid]}
                gridSetting={gridSetting}
              />
              <Alphabet />
              <div className="App-menu" />
            </div>
          </div>
        )}
      </Consumer>
    )
  }
}

export default App;
