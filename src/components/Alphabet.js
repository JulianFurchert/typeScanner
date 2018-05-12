import React, {Component} from 'react';
import Letter from './Letter';
import Artboard from './Artboard'
import './Alphabet.css';
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"]

class Alphabet extends Component{

  renderLetters(alphabet, selectLetter){
    return letters.map( (lettername,index) => {
      return (
        <Letter
          key={index}
          viewbox={"0 0 1100 1000"}
          letterName={lettername}
          letter={alphabet[lettername]}
        />
      )
    });
  }

  render(){
    return (
      <Artboard>
        <div className="Alphabet" >
          {this.renderLetters(this.props.alphabet, this.props.selectLetter)}
        </div>
      </Artboard>
    )
  }
}

export default Alphabet;