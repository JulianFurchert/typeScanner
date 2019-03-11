import React from 'react';
import { Consumer } from "../context";
import Header from './Header';
import Alphabet from './Alphabet';
import PreviewLetter from './PreviewLetter';
import Grid from './Grid';
import Artboard from './Artboard';
import Menu from './Menu';
import './App.css';


const App = () => {
  return (
    <Consumer>
      {({ alphabet, renderAlphabet, resetAlphabet, previewLetter, setPreviewLetter, fontWeight, setFontWeight, grid, setGrid, gridSetting, setGridSetting }) => (
        <div className="App">
          <Header weight={fontWeight} grid={grid} gridSetting={gridSetting}  />
          <div className= "App-main">
            <Artboard artboard="previewLetter" >
              <Grid setGrid={setGrid} grid={grid} {...gridSetting}/>
              <PreviewLetter weight={fontWeight} animateTime={400} viewbox={"0 0 1100 1400"} letterName={previewLetter} letter={alphabet[previewLetter]} />
            </Artboard>
            <Artboard artboard="alphabet" >
              <Alphabet setPreviewLetter={setPreviewLetter} weight={fontWeight} viewbox={"0 0 1100 1000"} alphabet={alphabet}/>
            </Artboard>
          </div>
          <div className= "App-menu">
            <Menu
              fontWeight={fontWeight}
              gridSetting={gridSetting}
              setGrid={setGrid}
              setGridSetting={setGridSetting}
              setFontWeight={setFontWeight}
              renderAlphabet={renderAlphabet}
              resetAlphabet={resetAlphabet}
              letter={alphabet[previewLetter]}
              alphabet={alphabet}
              grid={grid}
            />
          </div>
        </div>
      )}
    </Consumer>
  )
}

export default App;
