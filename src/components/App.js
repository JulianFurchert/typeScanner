import React, { Component } from 'react';
import { Consumer } from "../context";
import Alphabet from './Alphabet';
import PreviewLetter from './PreviewLetter';
import Grid from './Grid';
import Artboard from './Artboard';
import Menu from './Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <Consumer>
        {({ alphabet, renderAlphabet, resetAlphabet, previewLetter, setPreviewLetter, fontWeight, setFontWeight, grid, setGrid, gridSetting, setGridSetting }) => (
          <div className="App">
            <div className= "App-main">
              <Artboard artboard="previewLetter" >
                <PreviewLetter weight={fontWeight} animateTime={400} viewbox={"0 0 1100 1400"} letterName={previewLetter} letter={alphabet[previewLetter]} />
                <Grid setGrid={setGrid} grid={grid} {...gridSetting}/>
              </Artboard>
              <Artboard artboard="alphabet" >
                <Alphabet setPreviewLetter={setPreviewLetter} weight={fontWeight} viewbox={"0 0 1100 1000"} alphabet={alphabet}/>
              </Artboard>
            </div>
            <div className= "App-menu">
              <Menu
                fontWeight={fontWeight}
                gridSetting={gridSetting}
                setGridSetting={setGridSetting}
                setFontWeight={setFontWeight}
                renderAlphabet={renderAlphabet}
                resetAlphabet={resetAlphabet}
              />
            </div>
          </div>
        )}
      </Consumer>
    )
  }
}

export default App;
