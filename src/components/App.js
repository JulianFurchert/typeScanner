import React, { Component } from 'react';
import { Consumer } from "../context";
import Artboard from './Artboard'
import Alphabet from './Alphabet';
import PreviewLetter from './PreviewLetter';
import Menu from './Menu';
import './App.css';


class App extends Component {
  render() {
    return (
      <Consumer>
        {({ alphabet, previewLetter }) => (
          <div className="App">
            <div className= "App-main">
              <Artboard>
                <PreviewLetter viewbox={"0 0 1100 1400"} letter={previewLetter} />
                <Menu />
              </Artboard>
              <Artboard>
                <Alphabet viewbox={"0 0 1100 1000"} alphabet={alphabet}/>
                <Menu />
              </Artboard>
            </div>
          </div>
        )}
      </Consumer>
    )
  }
}

export default App;
