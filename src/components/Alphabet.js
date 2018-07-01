import React, {Component} from 'react';
import Letter from './Letter';
import calcSize from '../helper/calcSize';
import './Alphabet.css';
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"]

class Alphabet extends Component{

  constructor(props){
    super(props);
    this.alphabet = React.createRef()
    this.state = {
      letterWidth: 80,
    };
  }

  componentDidMount(){
    //this.updateDimensions();
    //window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    //window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions(){
    let positionInfo = this.alphabet.current.getBoundingClientRect();
    let height = positionInfo.height;
    let width = positionInfo.width;
    let letterWidth = calcSize(25, height, width);
    this.setState({ letterWidth }, ()=>{
      console.log("updated")
    });
  }

  renderLetters(alphabet, selectLetter, weight, setPreviewLetter){
    return letters.map( (lettername,index) => {
      return (
        <Letter
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