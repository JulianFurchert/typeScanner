import React, {Component} from 'react';
import Letter from './Letter'
import './Alphabet.css'

import { Consumer } from "../context";

class Alphabet extends Component{
  render(){
    return (
        <Consumer>
          {({ alphabet, selectLetter }) => (
            <div className="Alphabet" >
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="A" letterJson={alphabet.A} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="B" letterJson={alphabet.B} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="C" letterJson={alphabet.C} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="D" letterJson={alphabet.D} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="E" letterJson={alphabet.E} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="F" letterJson={alphabet.F} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="G" letterJson={alphabet.G} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="H" letterJson={alphabet.H} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="I" letterJson={alphabet.I} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="J" letterJson={alphabet.J} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="K" letterJson={alphabet.K} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="L" letterJson={alphabet.L} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="M" letterJson={alphabet.M} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="N" letterJson={alphabet.N} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="O" letterJson={alphabet.O} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="P" letterJson={alphabet.P} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="Q" letterJson={alphabet.Q} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="R" letterJson={alphabet.R} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="S" letterJson={alphabet.S} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="T" letterJson={alphabet.T} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="U" letterJson={alphabet.U} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="V" letterJson={alphabet.V} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="X" letterJson={alphabet.X} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="Y" letterJson={alphabet.Y} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="Z" letterJson={alphabet.Z} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="A" letterJson={alphabet.A} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="B" letterJson={alphabet.B} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="C" letterJson={alphabet.C} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="D" letterJson={alphabet.D} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="E" letterJson={alphabet.E} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="F" letterJson={alphabet.F} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="G" letterJson={alphabet.G} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="H" letterJson={alphabet.H} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="I" letterJson={alphabet.I} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="J" letterJson={alphabet.J} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="K" letterJson={alphabet.K} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="L" letterJson={alphabet.L} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="M" letterJson={alphabet.M} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="N" letterJson={alphabet.N} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="O" letterJson={alphabet.O} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="P" letterJson={alphabet.P} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="Q" letterJson={alphabet.Q} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="R" letterJson={alphabet.R} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="S" letterJson={alphabet.S} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="T" letterJson={alphabet.T} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="U" letterJson={alphabet.U} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="V" letterJson={alphabet.V} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="X" letterJson={alphabet.X} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="Y" letterJson={alphabet.Y} />
              <Letter viewbox={"0 0 1100 1000"} selectLetter={selectLetter} letter="Z" letterJson={alphabet.Z} />
            </div>
          )}
        </Consumer>

    )
  }
}

export default Alphabet;