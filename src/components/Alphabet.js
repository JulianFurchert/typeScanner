import React, {Component} from 'react';
import Letter from './Letter';
import './Alphabet.css';
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


class Alphabet extends Component{

  renderLetters(alphabet, selectLetter, weight, setPreviewLetter){
    return letters.map( (lettername,index) => {
      return (
        <div  className="Alphabet-Grid-Item">
          <Letter
            weight={weight}
            key={index}
            viewbox={"0 0 1100 1000"}
            letterName={lettername}
            letter={alphabet[lettername]}
            setPreviewLetter={setPreviewLetter}
          />
        </div>
      )
    });
  }

  render(){
    return (
      <div className="Alphabet-Grid" >
        {this.renderLetters(this.props.alphabet, this.props.selectLetter, this.props.weight, this.props.setPreviewLetter)}
      </div>
    )
  }
}

export default Alphabet;