import React, {Component} from 'react';
import Letter from './Letter';
import calcSize from '../helper/calcSize';
import './Alphabet.css';
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"]
const squareSize = 50;


const calcDimensions = (width, height) => {
  let area = width * height;
  let squareArea = area / letters.length;
  let squaresize = Math.pow(squareArea, 0.5);
  return squaresize;
}

class Alphabet extends Component{

  constructor(props){
    super(props);
    this.alphabet = React.createRef()
    this.state = {
      letterSize: 80,
    };
  }

  componentDidMount(){
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions(){
    let artboard = this.alphabet.current.parentElement;
    let artboardSize = artboard.getBoundingClientRect();
    let height = artboardSize.height;
    let width = artboardSize.width;
    let letterSize = calcDimensions(width, height);
    this.setState( {letterSize} );
  }

  renderLetters(alphabet, selectLetter, weight, setPreviewLetter){
    return letters.map( (lettername,index) => {
      return (
        <Letter
          size={this.state.letterSize}
          weight={weight}
          key={index}
          viewbox={"0 0 1100 1000"}
          letterName={lettername}
          letter={alphabet[lettername]}
          setPreviewLetter={setPreviewLetter}
          letterWidth={this.state.letterWidth}
        />
      )
    });
  }

  render(){
    return (
      <div ref={this.alphabet} className="Alphabet" >
        {this.renderLetters(this.props.alphabet, this.props.selectLetter, this.props.weight, this.props.setPreviewLetter)}
      </div>
    )
  }
}

export default Alphabet;