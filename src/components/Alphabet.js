import React, {Component} from 'react';
import Letter from './Letter'
import './Alphabet.css'

import { Consumer } from "../context";

class Alphabet extends Component{
  render(){
    return (
        <Consumer>
          {({ alphabet}) => (
            <div className="Alphabet" >
              <Letter letter="A" letterJson={alphabet.A} />
              <Letter letter="B" letterJson={alphabet.B} />
              <Letter letter="C" letterJson={alphabet.C} />
              <Letter letter="D" letterJson={alphabet.D} />
              <Letter letter="E" letterJson={alphabet.E} />
              <Letter letter="F" letterJson={alphabet.F} />
              <Letter letter="G" letterJson={alphabet.G} />
              <Letter letter="H" letterJson={alphabet.H} />
              <Letter letter="I" letterJson={alphabet.I} />
              <Letter letter="J" letterJson={alphabet.J} />
              <Letter letter="K" letterJson={alphabet.K} />
              <Letter letter="L" letterJson={alphabet.L} />
              <Letter letter="M" letterJson={alphabet.M} />
              <Letter letter="N" letterJson={alphabet.N} />
              <Letter letter="O" letterJson={alphabet.O} />
              <Letter letter="P" letterJson={alphabet.P} />
              <Letter letter="Q" letterJson={alphabet.Q} />
              <Letter letter="R" letterJson={alphabet.R} />
              <Letter letter="S" letterJson={alphabet.S} />
              <Letter letter="T" letterJson={alphabet.T} />
              <Letter letter="U" letterJson={alphabet.U} />
              <Letter letter="V" letterJson={alphabet.V} />
              <Letter letter="X" letterJson={alphabet.X} />
              <Letter letter="Y" letterJson={alphabet.Y} />
              <Letter letter="Z" letterJson={alphabet.Z} />
            </div>
          )}
        </Consumer>

    )
  }
}

export default Alphabet;