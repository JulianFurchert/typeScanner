import React, { Component } from 'react';
import Alphabet from './Alphabet';
import SelectedLetter from './SelectedLetter';
import './App.css';

import { Consumer } from "../context";

class App extends Component {
  render() {
    return (
      <Consumer>
        {({ selectedLetter, alphabet }) => (
          <div className="App">
            <div className= "App-main">
              <SelectedLetter
                letter={selectedLetter}
                letterJson={alphabet[selectedLetter]}
              />
              <Alphabet />
            </div>
          </div>
        )}
      </Consumer>
    )
  }
}

export default App;
