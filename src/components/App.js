import React, { Component } from 'react';
import { Consumer } from "../context";
import Alphabet from './Alphabet';
import PreviewLetter from './PreviewLetter';
import Artboard from './Artboard';
import Menu from './Menu';
import './App.css';


class App extends Component {
  render() {
    return (
      <Consumer>
        {({ alphabet, previewLetter }) => (
          <div className="App">
            <div className= "App-main">
              <Artboard artboard="previewLetter" >
                <PreviewLetter animateTime={400} viewbox={"0 0 1100 1400"} letter={previewLetter} />
              </Artboard>
              <Artboard artboard="alphabet" >
                <Alphabet viewbox={"0 0 1100 1000"} alphabet={alphabet}/>
              </Artboard>
            </div>
            <div className= "App-menu">
              <Menu />
            </div>
          </div>
        )}
      </Consumer>
    )
  }
}

export default App;
