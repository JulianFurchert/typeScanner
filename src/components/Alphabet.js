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
              <Letter selectLetter={selectLetter} letter="A" letterJson={alphabet.A} />
              <Letter selectLetter={selectLetter} letter="B" letterJson={alphabet.B} />
              <Letter selectLetter={selectLetter} letter="C" letterJson={alphabet.C} />
              <Letter selectLetter={selectLetter} letter="D" letterJson={alphabet.D} />
              <Letter selectLetter={selectLetter} letter="E" letterJson={alphabet.E} />
              <Letter selectLetter={selectLetter} letter="F" letterJson={alphabet.F} />
              <Letter selectLetter={selectLetter} letter="G" letterJson={alphabet.G} />
              <Letter selectLetter={selectLetter} letter="H" letterJson={alphabet.H} />
              <Letter selectLetter={selectLetter} letter="I" letterJson={alphabet.I} />
              <Letter selectLetter={selectLetter} letter="J" letterJson={alphabet.J} />
              <Letter selectLetter={selectLetter} letter="K" letterJson={alphabet.K} />
              <Letter selectLetter={selectLetter} letter="L" letterJson={alphabet.L} />
              <Letter selectLetter={selectLetter} letter="M" letterJson={alphabet.M} />
              <Letter selectLetter={selectLetter} letter="N" letterJson={alphabet.N} />
              <Letter selectLetter={selectLetter} letter="O" letterJson={alphabet.O} />
              <Letter selectLetter={selectLetter} letter="P" letterJson={alphabet.P} />
              <Letter selectLetter={selectLetter} letter="Q" letterJson={alphabet.Q} />
              <Letter selectLetter={selectLetter} letter="R" letterJson={alphabet.R} />
              <Letter selectLetter={selectLetter} letter="S" letterJson={alphabet.S} />
              <Letter selectLetter={selectLetter} letter="T" letterJson={alphabet.T} />
              <Letter selectLetter={selectLetter} letter="U" letterJson={alphabet.U} />
              <Letter selectLetter={selectLetter} letter="V" letterJson={alphabet.V} />
              <Letter selectLetter={selectLetter} letter="X" letterJson={alphabet.X} />
              <Letter selectLetter={selectLetter} letter="Y" letterJson={alphabet.Y} />
              <Letter selectLetter={selectLetter} letter="Z" letterJson={alphabet.Z} />
              <Letter selectLetter={selectLetter} letter="A" letterJson={alphabet.A} />
              <Letter selectLetter={selectLetter} letter="B" letterJson={alphabet.B} />
              <Letter selectLetter={selectLetter} letter="C" letterJson={alphabet.C} />
              <Letter selectLetter={selectLetter} letter="D" letterJson={alphabet.D} />
              <Letter selectLetter={selectLetter} letter="E" letterJson={alphabet.E} />
              <Letter selectLetter={selectLetter} letter="F" letterJson={alphabet.F} />
              <Letter selectLetter={selectLetter} letter="G" letterJson={alphabet.G} />
              <Letter selectLetter={selectLetter} letter="H" letterJson={alphabet.H} />
              <Letter selectLetter={selectLetter} letter="I" letterJson={alphabet.I} />
              <Letter selectLetter={selectLetter} letter="J" letterJson={alphabet.J} />
              <Letter selectLetter={selectLetter} letter="K" letterJson={alphabet.K} />
              <Letter selectLetter={selectLetter} letter="L" letterJson={alphabet.L} />
              <Letter selectLetter={selectLetter} letter="M" letterJson={alphabet.M} />
              <Letter selectLetter={selectLetter} letter="N" letterJson={alphabet.N} />
              <Letter selectLetter={selectLetter} letter="O" letterJson={alphabet.O} />
              <Letter selectLetter={selectLetter} letter="P" letterJson={alphabet.P} />
              <Letter selectLetter={selectLetter} letter="Q" letterJson={alphabet.Q} />
              <Letter selectLetter={selectLetter} letter="R" letterJson={alphabet.R} />
              <Letter selectLetter={selectLetter} letter="S" letterJson={alphabet.S} />
              <Letter selectLetter={selectLetter} letter="T" letterJson={alphabet.T} />
              <Letter selectLetter={selectLetter} letter="U" letterJson={alphabet.U} />
              <Letter selectLetter={selectLetter} letter="V" letterJson={alphabet.V} />
              <Letter selectLetter={selectLetter} letter="X" letterJson={alphabet.X} />
              <Letter selectLetter={selectLetter} letter="Y" letterJson={alphabet.Y} />
              <Letter selectLetter={selectLetter} letter="Z" letterJson={alphabet.Z} />
            </div>
          )}
        </Consumer>

    )
  }
}

export default Alphabet;